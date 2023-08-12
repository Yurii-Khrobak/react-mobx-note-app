import React from 'react'

const MyButton = ({children, ...props}) => {
   return (
      <button className='myBtn' {...props}>
	{children}
      </button>
   )
}

export default MyButton
