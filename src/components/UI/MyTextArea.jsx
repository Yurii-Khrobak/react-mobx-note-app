import React from 'react'

const MyTextArea = ({...props}) => {
  return(
    <textarea className='myTextArea' {...props}/>
  )
}

export default MyTextArea
