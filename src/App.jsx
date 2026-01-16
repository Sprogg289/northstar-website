import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Gallery from './pages/Gallery'
import Join from './pages/Join'
import Partnership from './pages/partnership'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/partnership" element={<Partnership/>} />
          <Route path="/events/:id" element={<EventDetails/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/join" element={<Join/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
