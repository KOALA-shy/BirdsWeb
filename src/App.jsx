import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CharactersSection from './components/CharactersSection'
import StorySection from './components/StorySection'
import BackgroundPattern from './components/BackgroundPattern'

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen" style={{ backgroundColor: '#fffef5' }}>
      {/* 背景图案 */}
      <div className="absolute inset-0 z-0">
        <BackgroundPattern />
      </div>

      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <CharactersSection />
        <StorySection />
      </div>
    </div>
  )
}

export default App
