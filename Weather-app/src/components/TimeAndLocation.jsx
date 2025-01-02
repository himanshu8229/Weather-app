import React from 'react'

const TimeAndLocation = ({weather: {formattedLocalTime,name,country},}) => {
  return (
    <div>
        <div className='my-6 flex items-center justify-center'>
            <p className='text-l=xl font-extralight'>
                
                {formattedLocalTime}
            </p>

        </div>
        <div className='flex justify-center items-center my-3'>
            <p className='text-3xl font-medium'>{`${name},${country}`}</p>
        </div>
      
    </div>
  )
}

export default TimeAndLocation