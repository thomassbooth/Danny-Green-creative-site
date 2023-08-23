import { Libre_Baskerville } from 'next/font/google'
import React from 'react'


const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })


interface formElementProps {
  no: string
  title: string,
  placeholder: string
  input: boolean
}

const FormElement: React.FC<formElementProps> = ({no, title, placeholder, input}) => {
  return (
    <div className = 'group flex w-full justify-between items-start pt-[6vh] border-t border-[#C9C9C9] transition-all duration-200 last-of-type:border-b'>
        <div className = 'flex flex-col w-full'>
            <label className = ' m-0 font-normal text-[1.8vw] '>{title}</label>
            {input 
              ? <input className = 'bg-transparent pt-3 pb-[6vh] font-light focus:outline-none w-full text-[1.5vw]' placeholder = {placeholder}/>
              : <textarea className = 'bg-transparent pt-3 pb-[6vh] font-light focus:outline-none w-full text-[1.5vw] resize-none' placeholder = {placeholder}/>
            }
        </div>
        <h3 className = {`${libre.className} opacity-80 text-[1.6vw] font-[400]`}>{no}</h3>
    </div>
  )
}

export default FormElement