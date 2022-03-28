import React from 'react'

const Volunteer = ({volunteer}) => {
  return (
    <div className='volunteer card'>
        {volunteer.map(item => {
            return(
                <div key={JSON.stringify(item)}>
                    <p>⛑️ {item.name}</p>
                    <p>{item.where}</p>
                    <p>{item.description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Volunteer