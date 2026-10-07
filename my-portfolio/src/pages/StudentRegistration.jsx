import { Link } from 'react-router-dom'
import studentRegistration from '../assets/student-registration.png'

export default function StudentRegistration() {
  return (
    <main>
      <section className="section">
        <div className="container">

          <p className="eyebrow">Project</p>

          <h2>Student Registration System</h2>

          <p>
            An object-oriented C++ project focused on managing students,
            courses, and registration through a structured console-based system.
          </p>

          <img
            src={studentRegistration}
            alt="Student Registration System running in the terminal"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '12px'
            }}
          />

          <h3>What it does</h3>

          <p>
            The system allows students and courses to be managed through
            a structured registration system.
          </p>

          <h3>What I used</h3>

          <p>
            C++, Object-Oriented Programming (OOP), and File Handling.
          </p>

          <h3>What was hard</h3>

          <p>
            Designing the different parts of the system and making the
            student, course, and registration information work together
            correctly was one of the challenging parts of the project.
          </p>

          <Link className="button button-secondary" to="/">
            Back to home
          </Link>

        </div>
      </section>
    </main>
  )
}