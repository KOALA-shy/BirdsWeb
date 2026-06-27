export function BlueBird({ size = 100 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className="drop-shadow-lg">
      {/* 身体 */}
      <ellipse cx="100" cy="110" rx="45" ry="50" fill="#1e40af" />

      {/* 头 */}
      <circle cx="100" cy="60" r="35" fill="#3b82f6" />

      {/* 冠羽 */}
      <path d="M 100 25 Q 95 10 100 5 Q 105 10 100 25 Z" fill="#1e40af" />

      {/* 眼睛 */}
      <circle cx="110" cy="55" r="5" fill="#000" />
      <circle cx="112" cy="53" r="2" fill="#fff" />

      {/* 喙 */}
      <path d="M 125 60 L 145 58 L 125 66 Z" fill="#f59e0b" />

      {/* 翅膀 */}
      <ellipse cx="75" cy="110" rx="20" ry="35" fill="#1e40af" transform="rotate(-20 75 110)" />

      {/* 尾羽 */}
      <path d="M 55 130 Q 35 140 30 160" stroke="#1e40af" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* 腿 */}
      <line x1="90" y1="160" x2="90" y2="175" stroke="#666" strokeWidth="3" strokeLinecap="round" />
      <line x1="110" y1="160" x2="110" y2="175" stroke="#666" strokeWidth="3" strokeLinecap="round" />

      {/* 爪 */}
      <path d="M 88 175 L 82 180 M 90 175 L 90 180 M 92 175 L 98 180" stroke="#666" strokeWidth="2" strokeLinecap="round" />
      <path d="M 108 175 L 102 180 M 110 175 L 110 180 M 112 175 L 118 180" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function WhiteBird({ size = 100 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className="drop-shadow-lg">
      {/* 身体 */}
      <ellipse cx="100" cy="110" rx="45" ry="50" fill="#f5f5f5" stroke="#ddd" strokeWidth="1" />

      {/* 头 */}
      <circle cx="100" cy="60" r="35" fill="#fafafa" stroke="#ddd" strokeWidth="1" />

      {/* 冠羽 */}
      <path d="M 100 25 Q 95 10 100 5 Q 105 10 100 25 Z" fill="#f5f5f5" />

      {/* 眼睛 */}
      <circle cx="110" cy="55" r="5" fill="#9333ea" />
      <circle cx="112" cy="53" r="2" fill="#fff" />

      {/* 喙 */}
      <path d="M 125 60 L 145 58 L 125 66 Z" fill="#d4a574" />

      {/* 翅膀 */}
      <ellipse cx="75" cy="110" rx="20" ry="35" fill="#e5e5e5" transform="rotate(-20 75 110)" />

      {/* 尾羽 */}
      <path d="M 55 130 Q 35 140 30 160" stroke="#f5f5f5" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* 腿 */}
      <line x1="90" y1="160" x2="90" y2="175" stroke="#999" strokeWidth="3" strokeLinecap="round" />
      <line x1="110" y1="160" x2="110" y2="175" stroke="#999" strokeWidth="3" strokeLinecap="round" />

      {/* 爪 */}
      <path d="M 88 175 L 82 180 M 90 175 L 90 180 M 92 175 L 98 180" stroke="#999" strokeWidth="2" strokeLinecap="round" />
      <path d="M 108 175 L 102 180 M 110 175 L 110 180 M 112 175 L 118 180" stroke="#999" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
