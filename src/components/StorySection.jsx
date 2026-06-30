import { PixelSectionTitle } from './PixelTitle'

const storyItems = [
  {
    title: '初相识',
    content: '小白来到家里的第一天，大蓝看到这只粉鼻子的小伙伴，眼睛都亮了。"这小家伙好像不错！"大蓝似乎发现了什么宝贝，主动走上前去，开始给小白梳毛。小白开心极了，从此就成了大蓝的小跟班。',
  },
  {
    title: '贴心日子',
    content: '小白的飞羽被剪了，飞不起来很害怕。聪明的大蓝放弃了自己平时最爱待的高处，每天都陪在小白身边，在地上走来走去。两只鸟形影不离，大蓝每天给小白梳毛，照顾得无微不至。那时候的他们，就像真正的亲兄弟。',
  },
  {
    title: '真相大白',
    content: '小白慢慢长大了，粉色的鼻子渐渐变成了蓝色...大蓝的表情瞬间僵住了。"你...你是男的？！"尴尬、失望、还有一点生气。原来大蓝之前是把小白当作了潜在的"伴侣"。这个反转太打击他了，从那以后，大蓝开始躲避小白，不再梳毛，还时不时互啄几下。',
  },
  {
    title: '现在的我们',
    content: '虽然大蓝选择了"冷战"，但小白从未放弃。他每天变着花样去逗大蓝，用各种调皮捣蛋的方式吸引注意力。大蓝嘴上说"别烦我"，但其实早就离不开小白了。他们现在的日常就是互啄、打架、吵闹，但那就是他们的爱情啊——相爱相杀，才是真的在乎。',
  },
]

export default function StorySection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 flex justify-center">
          <PixelSectionTitle text="他们的故事" size={80} />
        </div>

        <div className="space-y-12">
          {storyItems.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* 两张照片并排展示 */}
        <div className="grid grid-cols-2 gap-6 mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="B2.jpg"
              alt="大蓝"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="W2.jpg"
              alt="小白"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-10 border-2 border-gray-300">
          <p className="text-2xl text-gray-800 font-bold mb-3">
            相爱相杀，才是真的在乎 💕
          </p>
          <p className="text-gray-600">
            大蓝和小白的故事，还在继续...
          </p>
        </div>
      </div>
    </section>
  )
}
