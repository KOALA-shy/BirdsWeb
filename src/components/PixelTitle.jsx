export function PixelTitleBigSmall({ text, size = 80 }) {
  // 使用 Press Start 2P 字体，通过 SVG text 直接渲染
  return (
    <svg viewBox="0 0 600 120" width={size * 7} height={size} className="drop-shadow-lg">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-title-text {
          font-family: 'Press Start 2P', cursive;
          font-size: 60px;
          font-weight: bold;
          fill: #000;
          letter-spacing: 8px;
        }
      `}</style>
      <text x="300" y="75" textAnchor="middle" className="pixel-title-text">
        {text}
      </text>
    </svg>
  )
}

export function PixelSectionTitle({ text, size = 50 }) {
  return (
    <svg viewBox="0 0 500 100" width={size * 9} height={size} className="drop-shadow-lg">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-section-text {
          font-family: 'Press Start 2P', cursive;
          font-size: 40px;
          font-weight: bold;
          fill: #000;
          letter-spacing: 4px;
        }
      `}</style>
      <text x="250" y="65" textAnchor="middle" className="pixel-section-text">
        {text}
      </text>
    </svg>
  )
}
