export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-pink-400 pixel-font">
            鸟话日常
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-xl w-64">
            <img
              src="T1.jpg"
              alt="大蓝和小白合照"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
