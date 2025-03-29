import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ServiceSection from './component/home/ServiceSection'
import Blog from './pages/Blog'
import AboutSection from './component/about/AboutSection'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App