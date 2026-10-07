import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudentRegistration from './pages/StudentRegistration'
import PersonalPortfolio from './pages/PersonalPortfolio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/student-registration"
        element={<StudentRegistration />} 
      />

      <Route
        path="/personal-portfolio"
        element={<PersonalPortfolio />}
      />
    </Routes>
  )
}

export default App