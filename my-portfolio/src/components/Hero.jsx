import myPhoto from '../assets/amos.jpeg'

export default function Hero() {
  return (
    <section id="center">
      <div className="hero">
        <img
          src={myPhoto}
          className="base"
          width="170"
          height="170"
          alt="Amos Kingsley"
        />
      </div>

      <div>
        <h1>AMOS KINGSLEY</h1>

        <h2>Software Development Enthusiast</h2>

        <p>
          I'm exploring software development through C++, SQL, HTML, CSS,
          JavaScript, and React. I enjoy turning ideas into practical digital
          experiences and building projects that help me learn, create, and grow.
        </p>
      </div>

      <a href="#projects" className="counter">
        Explore My Projects →
      </a>
    </section>
  )
}