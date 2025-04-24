import React from 'react'

const User = (props) => {
  return (
    <div className='text-white bg-black text-4xl h-7 '>
        {props.elem.fullNAME}
    </div>
  )
}

export default User