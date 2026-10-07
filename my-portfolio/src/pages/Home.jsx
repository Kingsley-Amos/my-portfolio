import Hero from '../components/Hero.jsx'
import NextStep from '../components/NextStep.jsx'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <main>
      <Hero />

      <div className="ticks"></div>

      <NextStep />

      <div className="ticks"></div>

      {/* My Projects */}
      <section id="projects" className="projects-section">
        <div className="section-heading">
          <span className="section-label">WHAT I'VE BUILT</span>
          <h2>My Projects</h2>
          <p>
            A collection of projects I've worked on.
          </p>
        </div>

        <div className="projects-grid">

          {/* C++ */}
          <div className="project-card">
            <div className="project-icon">⚙️</div>

            <h3>Student Registration System</h3>

            <p>
              An object-oriented C++ project focused on managing students,
              courses, and registration through a structured console-based system.
            </p>

            <div className="project-tags">
              <span>C++</span>
              <span>OOP</span>
              <span>File Handling</span>
            </div>
                <Link
  to="/student-registration"
  className="project-link"
>
  View Project →
</Link>
            
          </div>

          {/* React */}
          <div className="project-card">
            <div className="project-icon">⚛️</div>

            <h3>Personal Portfolio</h3>

            <p>
              A React-based personal portfolio created to showcase my skills,
              projects and experience.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <Link
  to="/personal-portfolio"
  className="project-link"
>
  View Project →
</Link>
          </div>

          {/* HTML & CSS */}
          <div className="project-card">
            <div className="project-icon">🌐</div>

            <h3>Apple Webpage</h3>

            <p>
              A webpage created with HTML, CSS, links, images, and web page layout.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Web Design</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          {/* HTML & CSS — Other */}
          <div className="project-card">
            <div className="project-icon">🎨</div>

            <h3>HTML & CSS Project</h3>

            <p>
              Another web development project with page structure, styling,
              layout and responsive design.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Web Development</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          {/* SQL — UMaT */}
          <div className="project-card">
            <div className="project-icon">🗄️</div>

            <h3>UMaT Database</h3>

            <p>
              A database project based on a university environment, focusing
              on tables, relationships, SQL queries, and database organization.
            </p>

            <div className="project-tags">
              <span>SQL</span>
              <span>MySQL</span>
              <span>Database Design</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          {/* SQL — Student */}
          <div className="project-card">
            <div className="project-icon">📊</div>

            <h3>Student Database</h3>

            <p>
              A database project focused on organizing student information
              and working with SQL queries and relational data.
            </p>

            <div className="project-tags">
              <span>SQL</span>
              <span>MySQL</span>
              <span>Database</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          {/* SQL — Other */}
          <div className="project-card">
            <div className="project-icon">💾</div>

            <h3>Other SQL Project</h3>

            <p>
              A database project demonstrating practical SQL and database
              management concepts.
            </p>

            <div className="project-tags">
              <span>SQL</span>
              <span>MySQL</span>
              <span>Database</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

        </div>
      </section>

      <div className="ticks"></div>

      {/* My Goal */}
      <section id="space">
        <h2>My Goal</h2>

        <p>
          To keep advancing and build professionally as a
          software developer capable of creating useful, reliable,
          and genuine works
        </p>

        <p>
          <strong>
            Learning. Building. Improving.🚀
          </strong>
        </p>
      </section>
    </main>
  )
}