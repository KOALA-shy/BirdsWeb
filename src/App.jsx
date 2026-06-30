import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PhotoSection from './components/PhotoSection'
import CharactersSection from './components/CharactersSection'
import StorySection from './components/StorySection'
import BackgroundPattern from './components/BackgroundPattern'

function App() {
  return (
    <div className="relative bg-white overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <PhotoSection />
        <CharactersSection />
        <StorySection />
      </div>
    </div>
  )
}

export default App
