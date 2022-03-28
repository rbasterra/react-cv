import React from 'react'

const Languages = ({languages}) => {
  return (
    <div className='languages card'>
        {languages.map((item) => {
            return(
                <div key={JSON.stringify(item)}>
                    <p>{item.language}</p>
                    <p>✏️ Writing {item.wrlevel}</p>
                    <p>💬 Speaking{item.splevel}</p>
                </div>
                )
        })}
    </div>
  )
}

export default Languages