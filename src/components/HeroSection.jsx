export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            大蓝和小白
          </h2>
          <p className="text-lg text-gray-600">
            一个关于绿茶攻略失败、从配对到互怼的温暖故事
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="T1.jpg"
            alt="大蓝和小白合照"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
