import { useState } from 'react'
import Tease from './games/Tease'
import Groom from './games/Groom'

export default function Games() {
  const [activeGame, setActiveGame] = useState(null)

  if (activeGame === 'tease') {
    return <Tease onBack={() => setActiveGame(null)} />
  }

  if (activeGame === 'groom') {
    return <Groom onBack={() => setActiveGame(null)} />
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        互动游戏 🎮
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 逗小白游戏卡 */}
        <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-lg overflow-hidden border-4 border-pink-400 hover:shadow-xl transition">
          <div className="bg-pink-400 text-white p-8 text-center">
            <div className="text-6xl mb-4">⚪</div>
            <h3 className="text-2xl font-bold mb-2">逗小白</h3>
            <p className="text-pink-50">点击屏幕上的小白，看他如何反应</p>
          </div>

          <div className="p-8 text-center">
            <p className="text-gray-700 mb-6">
              小白天性好动，用各种方式逗他吧！<br />
              他会躲、会啃东西、还会骂人呢 😄
            </p>
            <button
              onClick={() => setActiveGame('tease')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              开始游戏
            </button>
          </div>
        </div>

        {/* 梳毛游戏卡 */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg overflow-hidden border-4 border-blue-400 hover:shadow-xl transition">
          <div className="bg-blue-400 text-white p-8 text-center">
            <div className="text-6xl mb-4">🔵</div>
            <h3 className="text-2xl font-bold mb-2">给大蓝梳毛</h3>
            <p className="text-blue-50">让这只老大哥开心起来</p>
          </div>

          <div className="p-8 text-center">
            <p className="text-gray-700 mb-6">
              大蓝喜欢被照顾。用温柔的手法给他梳毛，<br />
              他会越来越开心，最后去洗澡呢～
            </p>
            <button
              onClick={() => setActiveGame('groom')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              开始游戏
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-yellow-50 rounded-xl p-8 border-2 border-yellow-300 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">💡 小提示</h3>
        <p className="text-gray-700">
          两个游戏都很简单，就是为了让你跟大蓝和小白互动一下。<br />
          记得用一颗温柔的心去对待他们哦～
        </p>
      </div>
    </div>
  )
}
