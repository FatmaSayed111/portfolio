function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">FATMA</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact" className="btn">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
