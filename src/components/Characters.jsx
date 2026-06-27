import { BlueBird, WhiteBird } from './BirdIcon'

export default function Characters() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        角色档案
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 大蓝档案 */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-8 text-center border-b border-gray-200">
            <BlueBird size={140} />
            <h3 className="text-2xl font-bold text-gray-800 mt-6">大蓝</h3>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-1">性别/年纪</h4>
                <p className="text-gray-600 text-sm">男 / 在家生活3年</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">性格</h4>
                <p className="text-gray-600 text-sm">
                  谨慎老练、绅士范儿、非常亲人
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">特点</h4>
                <p className="text-gray-600 text-sm">
                  羽毛漂亮，喜欢洗澡，给人优雅的感觉
                </p>
              </div>

              <div className="bg-gray-50 rounded p-3 mt-4">
                <p className="text-sm text-gray-700">
                  一只沉着的老大哥，本来想收获爱情，结果被逆转了。现在有点"冷战"状态，但其实很在乎小白。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 小白档案 */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-8 text-center border-b border-gray-200">
            <WhiteBird size={140} />
            <h3 className="text-2xl font-bold text-gray-800 mt-6">小白</h3>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-1">性别/年纪</h4>
                <p className="text-gray-600 text-sm">男 / 在家生活6个月</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">性格</h4>
                <p className="text-gray-600 text-sm">
                  活泼调皮、机灵搞怪、好奇心强
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">特点</h4>
                <p className="text-gray-600 text-sm">
                  喜欢拆家、啃东西、骂人。虽然凶，但很粘人。
                </p>
              </div>

              <div className="bg-gray-50 rounded p-3 mt-4">
                <p className="text-sm text-gray-700">
                  充满热血的小伙子，虽然被大蓝"嫌弃"了，但从不放弃。用活力和调皮来吸引注意力，其实最爱的还是老哥哥。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">他们的关系</h3>
        <p className="text-gray-700">
          从互相吸引 → 亲密伙伴 → 尴尬疏远 → 日常互怼<br />
          <span className="font-bold text-gray-800 text-lg">
            相爱相杀，谁也离不开谁
          </span>
        </p>
      </div>
    </div>
  )
}
