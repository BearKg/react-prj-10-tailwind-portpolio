import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <article>
      <div>{skill.icon}</div>
      <h4 className="mt-6 font-bold">{skill.title}</h4>
      <p className="mt-2 text-slate-500">{skill.text}</p>
    </article>
  )
}

export default SkillCard
