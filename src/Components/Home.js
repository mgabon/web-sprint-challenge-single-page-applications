import React from 'react'
import pizza from '../Assets/Pizza.jpg'
import { useHistory } from 'react-router-dom'

const Style = {
    textAlign: 'center',
}

const ButtonStyle = {
    padding: '10%',
    backgroundColor: 'gold',
    fontSize: '1.5rem',
}

export default function Home() {

const history = useHistory()    
const routeToForm = () => {
history.push('/pizza')
}

 return(
<div className="home-wrapper" style={Style}>
    <img 
    className='pizza'
    src={pizza}
    alt="" /> 
    <button style={ButtonStyle}
    onClick={routeToForm}>
        Pizza?
    </button>
</div>
 )   
}