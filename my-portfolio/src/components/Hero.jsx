import myPhoto from '../assets/amos.jpeg'
import { useState } from 'react'
export default function Hero()
{
const[count, setCount] = useState(0)   
return(
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
      )
}     