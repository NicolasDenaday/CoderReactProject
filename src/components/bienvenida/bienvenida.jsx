import React from 'react'
import '../bienvenida/bienvenida.css'
import { Link } from 'react-router-dom'


function Bienvenida({greeting}) {
  return (
    <>
    <div className='greetingContainer'>
    <h2> {greeting} </h2>
    <Link className='link' to="/products"><button>Ver productos</button></Link>
    </div>
    </>
  )
}

export default Bienvenida