export function BlueBirdIcon({ size = 120 }) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={size} className="drop-shadow-lg">
      {/* 身体 */}
      <ellipse cx="100" cy="140" rx="50" ry="60" fill="#1e40af" />

      {/* 翅膀（灰白条纹，像瓦片） */}
      <g>
        <ellipse cx="70" cy="130" rx="28" ry="50" fill="#d0d0d0" transform="rotate(-25 70 130)" />
        {/* 条纹效果 */}
        <line x1="50" y1="100" x2="80" y2="160" stroke="#a0a0a0" strokeWidth="3" opacity="0.5" />
        <line x1="55" y1="95" x2="85" y2="165" stroke="#a0a0a0" strokeWidth="3" opacity="0.5" />
        <line x1="60" y1="92" x2="90" y2="168" stroke="#a0a0a0" strokeWidth="3" opacity="0.5" />
      </g>

      {/* 头部 */}
      <circle cx="100" cy="70" r="45" fill="#2563eb" />

      {/* 鼻子（花生形） */}
      <ellipse cx="100" cy="55" rx="22" ry="18" fill="#0c2461" />
      <ellipse cx="88" cy="52" rx="8" ry="10" fill="#1e40af" />
      <ellipse cx="112" cy="52" rx="8" ry="10" fill="#1e40af" />

      {/* 鼻孔 */}
      <circle cx="88" cy="52" r="4" fill="#000" />
      <circle cx="112" cy="52" r="4" fill="#000" />

      {/* 喙（倒三角） */}
      <path d="M 100 75 L 85 90 L 115 90 Z" fill="#d4a574" />

      {/* 腮蓝 */}
      <ellipse cx="65" cy="80" rx="12" ry="8" fill="#60a5fa" opacity="0.6" />
      <ellipse cx="135" cy="80" rx="12" ry="8" fill="#60a5fa" opacity="0.6" />

      {/* 黑色小圆斑点（腮蓝下面） */}
      <circle cx="60" cy="88" r="2.5" fill="#000" />
      <circle cx="68" cy="90" r="2" fill="#000" />
      <circle cx="140" cy="88" r="2.5" fill="#000" />
      <circle cx="132" cy="90" r="2" fill="#000" />

      {/* 眼睛 */}
      <circle cx="115" cy="65" r="6" fill="#000" />
      <circle cx="117" cy="63" r="2" fill="#fff" />

      {/* 脚 */}
      <line x1="85" y1="200" x2="85" y2="220" stroke="#666" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="200" x2="115" y2="220" stroke="#666" strokeWidth="3" strokeLinecap="round" />

      {/* 爪 */}
      <path d="M 83 220 L 78 226 M 85 220 L 85 226 M 87 220 L 92 226" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 113 220 L 108 226 M 115 220 L 115 226 M 117 220 L 122 226" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function WhiteBirdIcon({ size = 120 }) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={size} className="drop-shadow-lg">
      {/* 身体 */}
      <ellipse cx="100" cy="140" rx="50" ry="60" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1" />

      {/* 翅膀（白色带发光感） */}
      <g>
        <ellipse cx="70" cy="130" rx="28" ry="50" fill="#fafafa" transform="rotate(-25 70 130)" />
        {/* 光泽纹理 */}
        <line x1="50" y1="100" x2="80" y2="160" stroke="#f0f0f0" strokeWidth="2" opacity="0.7" />
        <line x1="55" y1="95" x2="85" y2="165" stroke="#f0f0f0" strokeWidth="2" opacity="0.5" />
      </g>

      {/* 头部 */}
      <circle cx="100" cy="70" r="45" fill="#ffffff" stroke="#e8e8e8" strokeWidth="1" />

      {/* 鼻子（花生形，淡紫蓝色） */}
      <ellipse cx="100" cy="55" rx="22" ry="18" fill="#d4c5e2" />
      <ellipse cx="88" cy="52" rx="8" ry="10" fill="#e8ddf5" />
      <ellipse cx="112" cy="52" rx="8" ry="10" fill="#e8ddf5" />

      {/* 鼻孔 */}
      <circle cx="88" cy="52" r="4" fill="#9966cc" />
      <circle cx="112" cy="52" r="4" fill="#9966cc" />

      {/* 喙（倒三角） */}
      <path d="M 100 75 L 85 90 L 115 90 Z" fill="#d4a574" />

      {/* 眼睛（紫色） */}
      <circle cx="115" cy="65" r="6" fill="#9333ea" />
      <circle cx="117" cy="63" r="2" fill="#fff" />

      {/* 脚 */}
      <line x1="85" y1="200" x2="85" y2="220" stroke="#999" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="200" x2="115" y2="220" stroke="#999" strokeWidth="3" strokeLinecap="round" />

      {/* 爪 */}
      <path d="M 83 220 L 78 226 M 85 220 L 85 226 M 87 220 L 92 226" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 113 220 L 108 226 M 115 220 L 115 226 M 117 220 L 122 226" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Q版鸟头（用于背景）
export function QBirdHead({ type = 'blue', size = 50, opacity = 0.1 }) {
  const color = type === 'blue' ? '#3b82f6' : '#f5f5f5'
  const strokeColor = type === 'blue' ? '#1e40af' : '#d0d0d0'

  return (
    <svg viewBox="0 0 100 120" width={size} height={size} opacity={opacity}>
      {/* 头 */}
      <circle cx="50" cy="50" r="40" fill={color} stroke={strokeColor} strokeWidth="1" />

      {/* 鼻子 */}
      <ellipse cx="50" cy="35" rx="15" ry="12" fill={strokeColor} />

      {/* 鼻孔 */}
      <circle cx="42" cy="34" r="3" fill="#000" />
      <circle cx="58" cy="34" r="3" fill="#000" />

      {/* 喙 */}
      <path d="M 50 50 L 40 65 L 60 65 Z" fill="#d4a574" />

      {/* 眼睛 */}
      <circle cx="60" cy="45" r="4" fill="#000" />
    </svg>
  )
}
