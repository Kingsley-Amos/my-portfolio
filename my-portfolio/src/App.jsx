import { useState } from 'react'
import myPhoto from './assets/amos.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={myPhoto}
            className="base"
            width="170"
            height="179"
            alt="Amos Kingsley"
          />

        </div>

        <div>
          <h1>AMOS KINGSLEY</h1>

          <p>
            Welcome to my little corner of the web. Hi, I’m Amos Kingsley — a passionate tech 
            enthusiast exploring the world of software development. 
            I enjoy turning ideas into clean, practical digital experiences 
            and building projects that challenge me to learn, create, and grow.
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Learning Progress: {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>

          <h2>What I'm Learning</h2>

          <p>
            I'm currently building a strong foundation in programming,
            web development, databases, and object-oriented programming.
          </p>

          <ul>
            <li>
              <a href="#">
                C++ & OOP
              </a>
            </li>

            <li>
              <a href="#">
                SQL & Databases
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>My Journey</h2>

          <p>
            I'm learning by doing. From writing my first programs to
            building projects with C++, SQL, HTML, CSS, JavaScript,
            and React, I'm taking things one step at a time.
          </p>

          <ul>
            <li>
              <a href="#">
                💻 Building projects
              </a>
            </li>

            <li>
              <a href="#">
                📚 Learning new concepts
              </a>
            </li>

            <li>
              <a href="#">
                🧠 Solving problems
              </a>
            </li>

            <li>
              <a href="#">
                🚀 Improving every day
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer">
        <h2>My Goal</h2>

        <p>
          To keep learning, keep building, and eventually become
          a skilled software developer.
        </p>

        <p>
          I'm just getting started. Let's go! 🚀
        </p>
      </section>
    </>
  )
}

export default App
