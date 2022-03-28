import React from 'react'

const Skills = ({skills}) => {
  return (
    <div className='skills card'>
        {skills.map((item) =><p key={JSON.stringify(item)}>🛠️ {item}</p>)}
    </div>
  )
}

export default Skills