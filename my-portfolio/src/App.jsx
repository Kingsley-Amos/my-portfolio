import './App.css'
import Hero from './components/Hero'
import NextStep from './components/NextStep'
function App() {
  return (
    <>
      <Hero />

      <div className="ticks"></div>

   <NextStep />

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
