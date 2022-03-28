import React from 'react'

const About = ({about}) => {
  return (
    <div className='card'>
        {about.map((item) => 
            <p>{item.info}</p>
        )}
    </div>
  )
}

export default About