import { PixelBlueBird, PixelWhiteBird } from './PixelBird'

export default function CharactersSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 pixel-font">
          他们的档案
        </h2>

        {/* 大蓝档案 */}
        <div className="mb-20 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="B1.jpg"
              alt="大蓝"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center mb-6">
              <PixelBlueBird size={160} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">大蓝</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-bold text-gray-800">性别/年纪</p>
                <p>男 / 在家生活3年</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">性格</p>
                <p>谨慎老练、绅士范儿、非常亲人</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">特点</p>
                <p>羽毛漂亮，喜欢洗澡。看起来优雅有品味。</p>
              </div>
              <div className="bg-blue-50 rounded p-4 mt-4">
                <p className="text-sm">
                  一只沉着的老大哥，本来想收获爱情，结果被逆转了。现在有点"冷战"状态，但其实很在乎小白。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 小白档案 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="W1.jpg"
              alt="小白"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center mb-6">
              <PixelWhiteBird size={160} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">小白</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-bold text-gray-800">性别/年纪</p>
                <p>男 / 在家生活6个月</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">性格</p>
                <p>活泼调皮、机灵搞怪、好奇心强</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">特点</p>
                <p>喜欢拆家、啃东西、骂人。羽毛洁白有光泽。</p>
              </div>
              <div className="bg-pink-50 rounded p-4 mt-4">
                <p className="text-sm">
                  充满热血的小伙子，虽然被大蓝"嫌弃"了，但从不放弃。用活力和调皮来吸引注意力，其实最爱的还是老哥哥。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
