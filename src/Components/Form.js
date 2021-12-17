import  React from "react"
import { useHistory } from 'react-router-dom'
import pizza from '../Assets/Pizza.jpg'



export default function Form(props){
    const {
        values,
        submit,
        change,
        errors,
      } = props

      const history = useHistory()
      const onTheWay = () => {
        history.push('/complete')
      }

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
        onTheWay()
      }


    const onChange = (evt, v) => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : type === 'radio' ? v : value 
        change(name, valueToUse)
      }


console.log(values.sauce)
    return (
        <form id='pizza-form' onSubmit={onSubmit} >
        <div className="Form">
            <header>
        <img src={pizza}></img>
        <h1>Build your own pizza!</h1>
        </header>

        <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
        <div>{errors.substitute}</div>
        </div>      

        <div className="customerInfo">
        <label>Customer Name:
            <input
            value={values.name}
            onChange={onChange} 
            name='name'
            id='name-input'
            type='text'
            />
        </label>
        </div>

        <div id="size-dropdown">
            <label>Select your size
            <select 
            onChange={onChange}
            value={values.size}
            name="size">
            <option value=''>-Select a size-</option>
            {['small', 'medium', 'large'].map(e => (
             
             <option value={e}>{e.toUpperCase()}</option>
            ))}  
 
            </select>
            </label>
        </div>

        <div className="sauce">
            <h2>Choice of Sauce</h2>
        <label>Original Red
            <input 
            type='radio'
            value={values.sauce}
            name='sauce'
            onChange={e => onChange(e, 'Original Red')}
            />
        </label>

        <label>Garlic Ranch
            <input 
            type='radio'
            name='sauce'
            value={values.sauce}
            onChange={e => onChange(e, 'Garlic Ranch')}
            />
        </label>

        <label>BBQ Sauce
            <input 
            type='radio'
            name='sauce'
            value={values.sauce}
            onChange={e => onChange(e, 'BBQ Sauce')}
            />
        </label>

        <label>Spinach Alfredo
            <input 
            type='radio'
            name='sauce'
            value={values.sauce}
            onChange={e => onChange(e, 'Spinach Alfredo')}
            />
        </label>
        </div>

        <div className="Toppings">
        <h2>Select your desired toppings!</h2>
        
        {['Pepperoni' , 'Sausage', 'Bacon', 'Chicken', 'Peppers', 'Olives', 'Onions', 'Tomatoes', 'Pineapples', 'Garlic'].map((e, index) => (
            <label>{e}
            <input 
            type="checkbox"
            name={`topping${index + 1}`}
            checked={values[`topping${index + 1}`]}
            onChange={onChange}
            />
        </label>
        ))}
        
        </div>

        <div className="substitute">
        <h2>Choice of substitute.</h2>
        <label>
            <input 
            type="checkbox"
            name="substitute"
            checked={values.substitute}
            onChange={onChange}
            />
            Gluten Free Crust</label>

        </div>

        <div className="instructions">
        <label>Special instructions
            <input
            name="instructions"
            type="text"
            value={values.instructions}
            onChange={onChange}
            />
        </label>
        </div>
        <button
        className="button"
        > Add to order. </button>
        </div>
        </form>
    )
}