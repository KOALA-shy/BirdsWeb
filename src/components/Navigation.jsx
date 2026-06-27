export default function Navigation({ currentPage, setCurrentPage }) {
  const pages = [
    { id: 'home', label: '首页' },
    { id: 'story', label: '他们的故事' },
    { id: 'characters', label: '角色档案' },
    { id: 'gallery', label: '日常相册' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 py-3 md:gap-6">
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`px-4 py-2 font-medium transition text-sm md:text-base ${
                currentPage === page.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
