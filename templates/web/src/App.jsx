import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function MainPage() {
  return (
    <div className="main-page">
      <h1>Welcome to OSJKIT</h1>
      <p>This is the main page of your new project template.</p>
      <Link className="button" to="/sample">Go to Sample App</Link>
    </div>
  )
}

function SampleApp() {
  return (
    <div className="sample-app">
      <h1>Sample App Page</h1>
      <p>This is a sample route. Start building your app here!</p>
      <Link className="button" to="/">Back to Main</Link>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <main className="app__main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sample" element={<SampleApp />} />
        </Routes>
      </main>
      <footer className="footer__bottom-center">
        created by opensourcejay
      </footer>
    </div>
  )
}

export default App
