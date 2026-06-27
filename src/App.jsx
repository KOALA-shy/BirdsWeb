import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Characters from './components/Characters'
import Gallery from './components/Gallery'
import Navigation from './components/Navigation'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && <Hero />}
      {currentPage === 'story' && <Story />}
      {currentPage === 'characters' && <Characters />}
      {currentPage === 'gallery' && <Gallery />}
    </div>
  )
}

export default App
