import { BlueBird, WhiteBird } from './BirdIcon'

export default function ComicPanel({ panel }) {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
        {panel.text}
      </p>

      <div className="flex flex-col gap-4 mb-6">
        {/* 大蓝说话气泡 */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 w-16">
            <BlueBird size={60} />
          </div>
          <div className="bg-blue-50 rounded-lg px-4 py-2 rounded-tl-none flex-1">
            <p className="text-sm md:text-base text-gray-800">{panel.birdA}</p>
          </div>
        </div>

        {/* 小白说话气泡 */}
        <div className="flex gap-3 justify-end items-start">
          <div className="bg-gray-50 rounded-lg px-4 py-2 rounded-tr-none flex-1 max-w-xs">
            <p className="text-sm md:text-base text-gray-800">{panel.birdB}</p>
          </div>
          <div className="flex-shrink-0 w-16">
            <WhiteBird size={60} />
          </div>
        </div>
      </div>
    </div>
  )
}
