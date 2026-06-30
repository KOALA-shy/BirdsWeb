export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-pink-400 mb-6 pixel-font">
            大蓝和小白
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            一个关于绿茶攻略失败、从配对到互怼的温暖故事
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src="T1.jpg"
            alt="大蓝和小白合照"
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
      </div>
    </section>
  )
}
