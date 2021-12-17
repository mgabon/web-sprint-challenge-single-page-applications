import React, { useState } from "react";
import {Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Home from "./Components/Home";
import Form from "./Components/Form"
import Complete from "./Components/Complete";
import * as yup from 'yup'
import schema from './Components/error'


const initialFormValues = {
  //name text
  name: '',
  //dropdown
  size: '',
  //radio
  sauce: '',
  //checkbox
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  topping7: false,
  topping8: false,
  topping9: false,
  topping10: false,
  //radio
  substitute: '',
  //text
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  substitute: '',
  instructions: '',
}

const initialPizza = [];
const App = () => {

  const [pizzaInfo, setPizzaInfo] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

const postPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(resp => {
    setPizzaInfo([resp.data, ...pizzaInfo]);
  }).catch(err => console.error(err))
  .finally(() => setFormValues(initialFormValues))
}

const validate = (name, value) => {
  if (name.includes('topping') || name === 'instructions'){
  return
  }
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ""}))
  .catch(err => setFormErrors({...formErrors, name: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newOrder = {
name: formValues.name.trim(),
size: formValues.size.trim(),
sauce: formValues.sauce.trim(),
toppings: Object.keys(formValues).filter(e => e.includes('topping')
).map(k => {
 return formValues[k]
}),
substitute: formValues.substitute,
instructions: formValues.instructions.trim(),
  }
  console.log(newOrder)
  postPizza(newOrder)
}

  return (
    <div className="App">
      <header>
      <nav>
    <h1 className="storeheader">Lambda Eats</h1>
      <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/help">Help</Link>
      </div>
      </nav>
      </header>
      <Switch>
        <Route path='/complete'>
          <Complete />
        </Route>
      <Route path='/pizza'>
          <Form
          values={formValues}
          submit={formSubmit}
          change={inputChange}
          errors={formErrors} />
        </Route>
        <Route path='/'>
      <Home />
      </Route>
      </Switch>
    </div>
  );
};
export default App;
