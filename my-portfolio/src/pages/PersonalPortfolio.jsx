import { Link } from 'react-router-dom'
import personalPortfolio from '../assets/personal-portfolio.png'

export default function PersonalPortfolio() {
  return (
    <main>
      <section className="section">
        <div className="container">

          <p className="eyebrow">Project</p>

          <h2>Personal Portfolio</h2>

          <p>
            A React-based personal portfolio created to showcase my skills,
            projects, and experience.
          </p>

          <img
            src={personalPortfolio}
            alt="Personal Portfolio website"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '12px'
            }}
          />

          <h3>What it does</h3>

          <p>
            The portfolio presents information about me, my skills, projects,
            goals, and the work I have built as I continue developing as a
            software developer.
          </p>

          <h3>What I used</h3>

          <p>
            React, JavaScript, CSS, and Vite.
          </p>

          <h3>What was hard</h3>

          <p>
            Learning how to structure a React application and connect the
            different parts of the portfolio together was one of the
            challenging parts of the project.
          </p>

          <Link className="button button-secondary" to="/">
            Back to home
          </Link>

        </div>
      </section>
    </main>
  )
}