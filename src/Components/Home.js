import React from 'react'
import pizza from '../Assets/Pizza.jpg'
import { useHistory } from 'react-router-dom'

export default function Home() {

const history = useHistory()    
const routeToForm = () => {
history.push('/pizza')
}

 return(
<div className="home-wrapper">
    <img 
    className='pizza'
    src={pizza}
    alt=""
    />
    <button
    onClick={routeToForm}>
        Pizza?
    </button>
</div>
 )   
}