import { PixelTitleBigSmall } from './PixelTitle'

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 flex justify-center">
          <PixelTitleBigSmall text="鸟话日常" size={60} />
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
