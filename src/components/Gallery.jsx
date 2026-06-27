import { useState } from 'react'

const photos = [
  {
    id: 'b1',
    src: '/B1.jpg',
    alt: '大蓝的特写',
    title: '大蓝',
  },
  {
    id: 'b2',
    src: '/B2.jpg',
    alt: '大蓝端庄的样子',
    title: '大蓝',
  },
  {
    id: 'w1',
    src: '/W1.jpg',
    alt: '小白的可爱模样',
    title: '小白',
  },
  {
    id: 'w2',
    src: '/W2.jpg',
    alt: '小白的萌样子',
    title: '小白',
  },
  {
    id: 't1',
    src: '/T1.jpg',
    alt: '大蓝和小白的合照',
    title: '我们在一起',
  },
]

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        日常相册
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map(photo => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative overflow-hidden h-48 bg-gray-100">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 图片预览模态框 */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto"
            />
            <div className="p-6 text-center">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
