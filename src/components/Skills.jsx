const skills = ["HTML", "CSS", "JavaScript", "React", "Git/GitHub", "Responsive Design"]

function Skills() {
  return (
    <div className="section container">
      <h2 className="section-title">Skills</h2>
      <ul className="chip-list">
        {skills.map((s, i) => <li className="chip" key={i}>{s}</li>)}
      </ul>
    </div>
  )
}

export default Skills
