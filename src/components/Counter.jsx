import React from 'react'
import { useState } from "react"

const Counter = () => {
    //      Estado,  función que cambia el valor del estado
    const [counter, setCounter] = useState(0)

    const handleAdd = () => {
        console.log(counter)
        if (counter + 1 <= 10) {
            setCounter(counter + 1)
        }
    }

    const handleRemove = () => {
        console.log(counter)
        if (counter - 1 >= 0) {
            setCounter(counter - 1)
        }
    }
    const handleReset = () => {
        setCounter(0)
    }
    return (
        <div className='principal'>
            <h2 className='principal__title-counter'>Pon el valor inicial del contador entre 1 y 10</h2>
            <form
                onSubmit={
                    e => {
                        e.preventDefault();
                        if (e.target.value_initial.value >= 1 && e.target.value_initial.value <= 10) {
                            setCounter(+e.target.value_initial.value)
                            e.target.value_initial.value = 0
                        } else {
                            window.alert('No es un numero valido')
                        }
                    }
                }
                className='form_initial'>
                <input type="number" name='value_initial' placeholder='0' className='form__input' />
                <button type="submit" className='form__btn'>Go!</button>
            </form>
            <div className="content-counter">
                <h2 className='tittle-counter'>EMPEZAREMOS EN: </h2>
                <h1 className='counter'>{counter}</h1>
                <div className="counter__content-btns">
                    <button onClick={handleAdd} className='content__btn btn1' disabled={counter >= 10}>+1</button>
                    <button onClick={handleRemove} className='content__btn btn2' disabled={counter  <= 0}>-1</button>
                    <button onClick={handleReset} className='content__btn btn3' disabled={counter === 0}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;