import { useState, useEffect } from "react"

let numericPart = '0';

export const Calculator = () => {

    const [expression, setExpression] = useState('0')
    const [sum, setSum] = useState(0)

    const handleNumberButton = (value:number) => {
        if(expression === '0') {
            setExpression(value.toString())
            numericPart = value.toString()
        } else {
            setExpression(expression + value.toString())
            numericPart += value.toString()
        }
    }

    const handlePointButton = (value:string) => {
        if(numericPart !== '0' && !numericPart.includes('.')) {
            setExpression(expression + value)
        }   
    }
    
    const handleOperatorButton = (value:string) => {
        if(expression !== '0' && !isNaN(Number(expression[expression.length - 1]))) {
            setExpression(expression + value)
            numericPart = '0'
        }
    }

    const handleEqualButton = () => {
        console.log("entro")
        try {
            setSum(eval(expression))
        } catch (error) {
            console.log(error)
        }
    }

    const handleAnsButton = () => {
        setExpression("0")
        numericPart = '0'
    }

    const handleDeleteButton = () => {
        if(expression.length > 1) {
            setExpression(expression.slice(0, expression.length - 1))
        } else {
            setExpression('0')
        }
    }

    return (
        <div className='w-2/3 h-2/3 bg-[#fefcff] grid grid-rows-3 grid-flow-col gap-4 p-4 rounded-lg'>
            <div className="row-span-3 bg-[#efeef6] rounded-lg">
            </div>
            <div className='bg-[#e5e6f0] rounded-lg col-span-2'>
                <div className='p-4 text-end font-bold text-black'>
                    <div className='text-2xl text-gray-700'>{expression}</div>
                    <div>{sum} </div>
                </div>
            </div>
            <div className='rounded-lg col-span-2 row-span-2'>
                <div className="grid grid-cols-5 gap-1 p-4">
                    <button onClick={()=>handleNumberButton(1)} className="btn btn-primary">1</button>
                    <button onClick={()=>handleNumberButton(2)} className="btn btn-primary">2</button>
                    <button onClick={()=>handleNumberButton(3)} className="btn btn-primary">3</button>
                    <button onClick={handleDeleteButton} className="btn btn-secondary">DEL</button>
                    <button onClick={handleAnsButton} className="btn btn-secondary">AC</button>
                    <button onClick={()=>handleNumberButton(4)} className="btn btn-primary">4</button>
                    <button onClick={()=>handleNumberButton(5)} className="btn btn-primary">5</button>
                    <button onClick={()=>handleNumberButton(6)} className="btn btn-primary">6</button>
                    <button onClick={()=>handleOperatorButton("*")} className="btn btn-primary">x</button>
                    <button onClick={()=>handleOperatorButton("/")} className="btn btn-primary">/</button>
                    <button onClick={()=>handleNumberButton(7)} className="btn btn-primary">7</button>
                    <button onClick={()=>handleNumberButton(8)} className="btn btn-primary">8</button>
                    <button onClick={()=>handleNumberButton(9)} className="btn btn-primary">9</button>
                    <button onClick={()=>handleOperatorButton("+")} className="btn btn-primary">+</button>
                    <button onClick={()=>handleOperatorButton("-")} className="btn btn-primary">-</button>
                    <button onClick={()=>handleNumberButton(0)} className="btn btn-primary">0</button>
                    <button onClick={()=>handlePointButton(".")} className="btn btn-primary">.</button>
                    <button onClick={()=>handleOperatorButton("falta")} className="btn btn-primary">x10^x</button>
                    <button className="btn btn-primary"> Ans </button>
                    <button onClick={handleEqualButton} className="btn btn-primary"> = </button>
                </div>
            </div>
        </div>
    )
}