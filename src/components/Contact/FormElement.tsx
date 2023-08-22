import React from 'react'

interface formElementProps {
  title: string,
  placeholder: string
}

const FormElement: React.FC<formElementProps> = ({title, placeholder}) => {
  return (
    <>
        <li className = 'group flex w-full justify-between items-center pt-[6vh] border-t border-[#C9C9C9] transition-all duration-200 last-of-type:border-b'>
            <div className = 'flex flex-col w-full'>
                <label className = ' m-0 font-normal text-[1.8vw] '>{title}</label>
                <input className = 'bg-transparent pt-3 pb-[6vh] font-light focus:outline-none w-full text-[1.5vw]' placeholder = {placeholder}/>
            </div>
        </li>
    </>
  )
}

export default FormElement