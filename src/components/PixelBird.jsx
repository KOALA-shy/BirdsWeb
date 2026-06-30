// 像素风鹦鹉形象
export function PixelBlueBird({ size = 120 }) {
  const scale = size / 120
  return (
    <svg viewBox="0 0 120 140" width={size} height={size} className="drop-shadow-lg image-rendering-pixelated">
      <style>{`svg image { image-rendering: pixelated; }`}</style>
      {/* 头部 - 圆形 */}
      <rect x="40" y="20" width="40" height="40" fill="#2563eb" />
      <rect x="38" y="22" width="2" height="36" fill="#2563eb" />
      <rect x="80" y="22" width="2" height="36" fill="#2563eb" />
      <rect x="42" y="18" width="36" height="2" fill="#2563eb" />
      <rect x="42" y="58" width="36" height="2" fill="#2563eb" />

      {/* 鼻子 - 花生形深蓝 */}
      <rect x="45" y="28" width="8" height="6" fill="#0c2461" />
      <rect x="67" y="28" width="8" height="6" fill="#0c2461" />
      <rect x="43" y="26" width="12" height="2" fill="#0c2461" />
      <rect x="65" y="26" width="12" height="2" fill="#0c2461" />

      {/* 鼻孔 */}
      <rect x="47" y="30" width="2" height="2" fill="#000" />
      <rect x="69" y="30" width="2" height="2" fill="#000" />

      {/* 喙 - 倒三角 */}
      <rect x="55" y="40" width="10" height="2" fill="#d4a574" />
      <rect x="53" y="42" width="14" height="2" fill="#d4a574" />
      <rect x="51" y="44" width="18" height="2" fill="#d4a574" />

      {/* 腮蓝 */}
      <rect x="35" y="35" width="4" height="3" fill="#60a5fa" opacity="0.7" />
      <rect x="81" y="35" width="4" height="3" fill="#60a5fa" opacity="0.7" />

      {/* 黑色斑点 */}
      <rect x="33" y="40" width="1" height="1" fill="#000" />
      <rect x="35" y="42" width="1" height="1" fill="#000" />
      <rect x="84" y="40" width="1" height="1" fill="#000" />
      <rect x="82" y="42" width="1" height="1" fill="#000" />

      {/* 眼睛 */}
      <rect x="68" y="32" width="2" height="2" fill="#000" />
      <rect x="69" y="31" width="1" height="1" fill="#fff" />

      {/* 身体 */}
      <rect x="35" y="60" width="50" height="50" fill="#1e40af" />
      <rect x="33" y="62" width="2" height="46" fill="#1e40af" />
      <rect x="85" y="62" width="2" height="46" fill="#1e40af" />

      {/* 翅膀条纹 */}
      <rect x="30" y="70" width="3" height="8" fill="#a0a0a0" />
      <rect x="30" y="82" width="3" height="8" fill="#a0a0a0" />
      <rect x="30" y="94" width="3" height="8" fill="#a0a0a0" />

      {/* 脚 */}
      <rect x="48" y="110" width="2" height="12" fill="#666" />
      <rect x="70" y="110" width="2" height="12" fill="#666" />

      {/* 爪 */}
      <rect x="46" y="120" width="1" height="2" fill="#666" />
      <rect x="49" y="120" width="1" height="2" fill="#666" />
      <rect x="52" y="120" width="1" height="2" fill="#666" />
      <rect x="68" y="120" width="1" height="2" fill="#666" />
      <rect x="71" y="120" width="1" height="2" fill="#666" />
      <rect x="74" y="120" width="1" height="2" fill="#666" />
    </svg>
  )
}

export function PixelWhiteBird({ size = 120 }) {
  const scale = size / 120
  return (
    <svg viewBox="0 0 120 140" width={size} height={size} className="drop-shadow-lg">
      <style>{`svg image { image-rendering: pixelated; }`}</style>
      {/* 头部 - 圆形白色 */}
      <rect x="40" y="20" width="40" height="40" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1" />
      <rect x="38" y="22" width="2" height="36" fill="#fafafa" />
      <rect x="80" y="22" width="2" height="36" fill="#fafafa" />
      <rect x="42" y="18" width="36" height="2" fill="#fafafa" />
      <rect x="42" y="58" width="36" height="2" fill="#fafafa" />

      {/* 鼻子 - 花生形紫蓝 */}
      <rect x="45" y="28" width="8" height="6" fill="#d4c5e2" />
      <rect x="67" y="28" width="8" height="6" fill="#d4c5e2" />
      <rect x="43" y="26" width="12" height="2" fill="#d4c5e2" />
      <rect x="65" y="26" width="12" height="2" fill="#d4c5e2" />

      {/* 鼻孔 - 紫色 */}
      <rect x="47" y="30" width="2" height="2" fill="#9966cc" />
      <rect x="69" y="30" width="2" height="2" fill="#9966cc" />

      {/* 喙 - 倒三角 */}
      <rect x="55" y="40" width="10" height="2" fill="#d4a574" />
      <rect x="53" y="42" width="14" height="2" fill="#d4a574" />
      <rect x="51" y="44" width="18" height="2" fill="#d4a574" />

      {/* 眼睛 - 紫色 */}
      <rect x="68" y="32" width="2" height="2" fill="#9333ea" />
      <rect x="69" y="31" width="1" height="1" fill="#fff" />

      {/* 身体 */}
      <rect x="35" y="60" width="50" height="50" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="1" />
      <rect x="33" y="62" width="2" height="46" fill="#f5f5f5" />
      <rect x="85" y="62" width="2" height="46" fill="#f5f5f5" />

      {/* 翅膀光泽 */}
      <rect x="30" y="70" width="3" height="8" fill="#f0f0f0" />
      <rect x="30" y="82" width="3" height="8" fill="#f0f0f0" />
      <rect x="30" y="94" width="3" height="8" fill="#f0f0f0" />

      {/* 脚 */}
      <rect x="48" y="110" width="2" height="12" fill="#999" />
      <rect x="70" y="110" width="2" height="12" fill="#999" />

      {/* 爪 */}
      <rect x="46" y="120" width="1" height="2" fill="#999" />
      <rect x="49" y="120" width="1" height="2" fill="#999" />
      <rect x="52" y="120" width="1" height="2" fill="#999" />
      <rect x="68" y="120" width="1" height="2" fill="#999" />
      <rect x="71" y="120" width="1" height="2" fill="#999" />
      <rect x="74" y="120" width="1" height="2" fill="#999" />
    </svg>
  )
}

// Q版头用于背景
export function PixelQBirdHead({ type = 'blue', size = 50, opacity = 0.1 }) {
  const color = type === 'blue' ? '#60a5fa' : '#f0f0f0'
  const darkColor = type === 'blue' ? '#1e40af' : '#d0d0d0'

  return (
    <svg viewBox="0 0 60 70" width={size} height={size} opacity={opacity}>
      {/* 头 */}
      <rect x="15" y="10" width="30" height="30" fill={color} />
      <rect x="13" y="12" width="2" height="26" fill={color} />
      <rect x="45" y="12" width="2" height="26" fill={color} />

      {/* 鼻子 */}
      <rect x="22" y="18" width="6" height="4" fill={darkColor} />
      <rect x="32" y="18" width="6" height="4" fill={darkColor} />

      {/* 鼻孔 */}
      <rect x="23" y="19" width="1" height="1" fill="#000" />
      <rect x="33" y="19" width="1" height="1" fill="#000" />

      {/* 喙 */}
      <rect x="27" y="26" width="6" height="1" fill="#d4a574" />
      <rect x="26" y="27" width="8" height="1" fill="#d4a574" />

      {/* 眼睛 */}
      <rect x="36" y="20" width="1" height="1" fill="#000" />
    </svg>
  )
}
