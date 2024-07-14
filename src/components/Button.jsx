import React, { Children } from 'react'

function Button( {
  children, 
  type = 'button', 
  bg_color  = 'bg-blue-600', 
  textColor =  ' text-white', 
  className = '',  
  ...props
}) {
  return (
<button className={`px-4 py-2 rounded-full cursor-pointer ${bg_color} ${textColor}  ${className}`} {...props}>
  {children}  
</button>
  )
}

export default Button; 
