import React, { useId } from 'react'

function Select({
  options , 
  label, 
  className = "", 
  ...props
}, ref) {
  const id = useId()
  return (
    <div className='w-full'>
      {
        label && <label htmlFor={id}></label>}
        <select 
        {...props}
        id={id}
        ref={ref}
        className={` px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`  }
        >
          {options?.map((opt) =>(
            <option key = {opt} value ={opt}>
              {opt}
            </option>
          ) )}
        </select>

    </div>
  )
}

export default  React.forwardRef(Select)
