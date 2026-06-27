import { useState } from 'react'

const groomStages = [
  {
    level: 0,
    text: '大蓝看着你，表情有点冷漠...',
    emoji: '🔵',
    mood: '冷漠',
  },
  {
    level: 3,
    text: '大蓝似乎意识到了什么，看向你...',
    emoji: '🔵',
    mood: '注意到你',
  },
  {
    level: 6,
    text: '大蓝开始享受了，闭上眼睛...',
    emoji: '😌',
    mood: '放松',
  },
  {
    level: 9,
    text: '大蓝很开心，发出满足的声音...',
    emoji: '😊',
    mood: '开心',
  },
  {
    level: 12,
    text: '大蓝非常开心，决定去洗澡了！',
    emoji: '🛁',
    mood: '超满足',
  },
]

export default function Groom({ onBack }) {
  const [groomCount, setGroomCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentStage = groomStages.reduce((prev, current) =>
    groomCount >= current.level ? current : prev
  )

  const handleGroom = () => {
    if (groomCount < 12) {
      setIsAnimating(true)
      setGroomCount(groomCount + 1)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  const progressPercent = (groomCount / 12) * 100

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
      >
        ← 返回游戏列表
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-blue-300">
        <div className="bg-blue-400 text-white p-6 text-center">
          <h2 className="text-3xl font-bold mb-2">给大蓝梳毛</h2>
          <p className="text-blue-50">轻轻地给他梳毛，看他如何开心起来～</p>
        </div>

        <div className="p-8">
          {/* 游戏区域 */}
          <div className="bg-gradient-to-b from-blue-100 to-blue-50 rounded-xl p-12 mb-8 border-2 border-dashed border-blue-300">
            <div className="text-center">
              <div className="text-8xl mb-6 transition-all duration-300">
                {currentStage.emoji}
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                {currentStage.text}
              </p>
              <p className="text-lg text-blue-600 font-semibold">
                心情：{currentStage.mood}
              </p>
            </div>
          </div>

          {/* 进度条 */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-gray-700">开心度</p>
              <p className="text-sm text-gray-600">
                {groomCount}/12
              </p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-600 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* 梳毛按钮 */}
          <div className="text-center mb-8">
            {groomCount < 12 ? (
              <button
                onClick={handleGroom}
                disabled={isAnimating}
                className={`text-2xl px-8 py-4 rounded-lg font-bold transition transform ${
                  isAnimating
                    ? 'scale-110 bg-blue-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-105'
                }`}
              >
                {isAnimating ? '✨ 在梳毛...' : '🪮 梳毛'}
              </button>
            ) : (
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
                <p className="text-2xl font-bold text-gray-800 mb-2">
                  🎉 大蓝去洗澡了！
                </p>
                <p className="text-gray-700">
                  他在水池里舒服地洗澡，时不时还回头看你一眼，<br />
                  眼里充满了满足和感激～
                </p>
              </div>
            )}
          </div>

          {/* 互动提示 */}
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 text-center mb-6">
            <p className="text-gray-700">
              {groomCount === 0 && '点击上面的按钮开始给大蓝梳毛吧！'}
              {groomCount > 0 && groomCount < 6 && '大蓝开始有反应了，继续！'}
              {groomCount >= 6 && groomCount < 12 && '大蓝越来越开心了！继续加油！'}
              {groomCount >= 12 && '完美！你赢了大蓝的心！💕'}
            </p>
          </div>

          <div className="text-center space-y-3">
            <button
              onClick={() => {
                setGroomCount(0)
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition mr-4"
            >
              重新开始
            </button>
            <button
              onClick={onBack}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
