import { useState } from 'react'

const reactions = [
  { text: '吱吱吱！（躲开！）', emoji: '😳' },
  { text: '呀呀呀！（啃一个！）', emoji: '🦅' },
  { text: '呀呀呀呀！（别烦我！）', emoji: '😤' },
  { text: '吱吱呀！（快过来！）', emoji: '😏' },
  { text: '呀呀呀呀呀！（你想怎样！）', emoji: '😠' },
  { text: '吱吱...（跑开了）', emoji: '🏃' },
]

const teaseQuips = [
  '小白非常不满意，扭动身体逃离',
  '小白学会了新的骂人方式',
  '小白决定去啃点什么来平复心情',
  '小白瞪着你，仿佛在说"算了我不理你"',
  '小白跑到高处，居高临下地骂你',
  '小白停顿了一下，好像在思考怎么反击',
  '小白做出了最凶的表情',
  '小白转身走开了，留下一个倔强的背影',
]

export default function Tease({ onBack }) {
  const [clickCount, setClickCount] = useState(0)
  const [currentReaction, setCurrentReaction] = useState(null)
  const [quip, setQuip] = useState(teaseQuips[0])
  const [position, setPosition] = useState({ x: 50, y: 50 })

  const handleClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    // 随机反应
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)]
    setCurrentReaction(randomReaction)

    // 随机旁白
    const randomQuip = teaseQuips[Math.floor(Math.random() * teaseQuips.length)]
    setQuip(randomQuip)

    // 随机移动小白的位置（保持在屏幕内）
    const newX = Math.random() * 70 + 15
    const newY = Math.random() * 60 + 20
    setPosition({ x: newX, y: newY })

    // 清空反应（1.5秒后）
    setTimeout(() => {
      setCurrentReaction(null)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
      >
        ← 返回游戏列表
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-pink-300">
        <div className="bg-pink-400 text-white p-6 text-center">
          <h2 className="text-3xl font-bold mb-2">逗小白</h2>
          <p className="text-pink-50">点击小白来逗他！</p>
        </div>

        <div className="p-8">
          {/* 游戏区域 */}
          <div className="relative bg-gradient-to-b from-blue-100 to-pink-100 rounded-xl h-96 mb-8 overflow-hidden cursor-pointer border-2 border-dashed border-pink-300">
            {/* 小白角色 */}
            <div
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute transition-all duration-300 cursor-pointer transform hover:scale-110"
              onClick={handleClick}
            >
              <div className="text-6xl drop-shadow-lg select-none">⚪</div>
            </div>

            {/* 反应气泡 */}
            {currentReaction && (
              <div
                style={{
                  left: `${position.x}%`,
                  top: `${position.y - 15}%`,
                  transform: 'translateX(-50%)',
                }}
                className="absolute bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-pink-400 animate-bounce whitespace-nowrap"
              >
                <p className="text-sm font-bold text-gray-800">
                  {currentReaction.text}
                </p>
              </div>
            )}

            {/* 引导文本 */}
            {clickCount === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white bg-opacity-80 rounded-lg p-6">
                  <p className="text-xl text-gray-700 font-bold">
                    👉 点击小白来逗他吧！
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 旁白和统计 */}
          <div className="bg-pink-50 rounded-lg p-6 mb-6 border-2 border-pink-200">
            <p className="text-center text-gray-700 mb-4">
              <span className="font-bold text-lg">{quip}</span>
            </p>
            <p className="text-center text-sm text-gray-600">
              你已经逗了小白 <span className="font-bold text-pink-600">{clickCount}</span> 次
            </p>
          </div>

          {/* 游戏提示 */}
          {clickCount >= 10 && (
            <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-300 text-center">
              <p className="text-gray-700 mb-2">
                😅 小白看起来真的不耐烦了...
              </p>
              <p className="text-sm text-gray-600">
                也许该让他休息一会儿了？或者去看看大蓝？
              </p>
            </div>
          )}

          <div className="text-center mt-6">
            <button
              onClick={() => {
                setClickCount(0)
                setCurrentReaction(null)
                setPosition({ x: 50, y: 50 })
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition mr-4"
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
