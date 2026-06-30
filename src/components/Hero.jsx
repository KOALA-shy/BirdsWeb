import { BlueBird, WhiteBird } from './BirdIcon'

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          欢迎来到大蓝和小白的世界
        </h2>
        <p className="text-gray-600 mb-8">
          一个关于"绿茶攻略"失败、从配对到互怼的温暖故事
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg overflow-hidden mb-12">
        <img
          src="T1.jpg"
          alt="大蓝和小白合照"
          className="w-full h-auto object-cover max-h-96"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <BlueBird size={120} />
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">大蓝</h3>
          <p className="text-gray-600 text-center">
            老练的绅士鹦鹉，在家生活了三年。羽毛漂亮，状态很好，非常亲人。喜欢在喝水池里悠闲地洗澡。
          </p>
        </div>

        <div className="flex flex-col items-center">
          <WhiteBird size={120} />
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">小白</h3>
          <p className="text-gray-600 text-center">
            活泼调皮的小伙子，刚来家里半年。充满好奇心，喜欢到处搞破坏、拆家、啃东西。虽然总是"凶巴巴"，但其实很粘人。
          </p>
        </div>
      </div>
    </div>
  )
}
