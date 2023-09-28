import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(1)

    const suma = () => {
        setContador(contador + 1)
    }
    
    const resta = () => {
        if (contador  > 1 ) {
            setContador(contador - 1)
        } 
    }

    const reset = () => {
        setContador(contador - contador + 1)
    }

    return(
        <>
        <button onClick={resta}>-</button>
        <p>{contador}</p>
        <button onClick={suma}>+</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Contador