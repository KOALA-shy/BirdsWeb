import ComicPanel from './ComicPanel'

const storyPanels = [
  {
    title: '第一章：初相识',
    panels: [
      {
        text: '小白来到家里了！大蓝第一次见到这个小家伙，有点懵...',
        birdA: '这...这谁啊？',
        birdB: '吱吱吱！（到处乱跑）',
      },
      {
        text: '大蓝看着这只粉鼻子的小鸟，似乎发现了什么好东西...',
        birdA: '咦？这小家伙好像是...嘿嘿',
        birdB: '呀呀呀！（东张西望）',
      },
      {
        text: '大蓝决定采取行动。他开始给小白梳毛...',
        birdA: '来来来，哥哥给你收拾收拾',
        birdB: '咿呀呀！（享受中）',
      },
      {
        text: '小白感动极了，开始粘着大蓝不离不弃',
        birdA: '嗯...还不错这小家伙',
        birdB: '呀呀呀！（跟屁虫模式开启）',
      },
    ],
  },
  {
    title: '第二章：亲密日子',
    panels: [
      {
        text: '小白的飞羽被剪了，飞不起来。他感到害怕...',
        birdA: '别怕，有哥哥呢',
        birdB: '吱吱...（蜷缩）',
      },
      {
        text: '大蓝放弃了高处的习惯，陪着小白在地上走',
        birdA: '咱俩一块走，有我呢',
        birdB: '（舒服地跟在后面）呀～',
      },
      {
        text: '他们形影不离，小白完全是大蓝的小跟班',
        birdA: '这小家伙真粘人',
        birdB: '呀呀呀呀！（我永远爱你！）',
      },
      {
        text: '时光美好，大蓝每天给小白梳毛、照顾他',
        birdA: '长大以后你就明白了',
        birdB: '吱吱吱～（满足）',
      },
    ],
  },
  {
    title: '第三章：真相大白',
    panels: [
      {
        text: '小白长大了！他的鼻子从粉色变成了...蓝色？',
        birdA: '？？？',
        birdB: '呀？（怎么了）',
      },
      {
        text: '大蓝的表情瞬间僵住了...这小子...是男的？！',
        birdA: '（老脸一红）你...你是...男的？',
        birdB: '呀呀呀！（我就是我呀！）',
      },
      {
        text: '尴尬的气氛弥漫开来，大蓝决定疏远这个"欺骗"他的小子',
        birdA: '哼！我才不管你呢！',
        birdB: '（委屈地跑过来）呀呀呀？',
      },
      {
        text: '从那以后，大蓝不再给小白梳毛，开始和他互啄打架',
        birdA: '别靠近我！',
        birdB: '（继续粘过来）呀呀呀！',
      },
    ],
  },
  {
    title: '第四章：现在的我们',
    panels: [
      {
        text: '小白虽然被大蓝"嫌弃"了，但他并没有放弃',
        birdA: '(生气中...)',
        birdB: '嘿嘿嘿！（你看我去逗他）',
      },
      {
        text: '每天，小白都在想方设法逗大蓝开心',
        birdA: '别烦我！',
        birdB: '吱吱吱！（这个呢？）',
      },
      {
        text: '他们经常互啄、打架，但其实这就是他们的相处方式',
        birdA: '你再靠近试试！',
        birdB: '好啊！（来啊！）',
      },
      {
        text: '其实，他们早就离不开彼此了。这就是爱啊。',
        birdA: '...',
        birdB: '（粘在一起）呀呀呀',
      },
    ],
  },
]

export default function Story() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        他们的故事
      </h2>

      {storyPanels.map((chapter, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
            {chapter.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapter.panels.map((panel, panelIdx) => (
              <ComicPanel key={panelIdx} panel={panel} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
