const demoProjects = [
  {
    title: "Todo App",
    desc: "Simple and clean todo list with filters.",
    link: "#",
  },
  {
    title: "Weather Widget",
    desc: "Fetches weather and shows a minimal dashboard.",
    link: "#",
  },
  {
    title: "Landing Page",
    desc: "Responsive landing with modern layout.",
    link: "#",
  },
]

function Projects() {
  return (
    <div className="section container">
      <h2 className="section-title">Projects</h2>
      <div className="grid">
        {demoProjects.map((p, i) => (
          <a key={i} className="card" href={p.link} target="_blank" rel="noreferrer">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="more">View →</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
