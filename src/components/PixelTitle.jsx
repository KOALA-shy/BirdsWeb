export function PixelTitleBigSmall({ text, size = 120 }) {
  // 使用 Press Start 2P 字体，通过 SVG text 直接渲染
  return (
    <svg viewBox="0 0 900 180" width={size * 7} height={size} className="drop-shadow-lg">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-title-text {
          font-family: 'Press Start 2P', cursive;
          font-size: 100px;
          font-weight: bold;
          fill: #000;
          letter-spacing: 12px;
        }
      `}</style>
      <text x="450" y="120" textAnchor="middle" className="pixel-title-text">
        {text}
      </text>
    </svg>
  )
}

export function PixelSectionTitle({ text, size = 80 }) {
  return (
    <svg viewBox="0 0 700 140" width={size * 8.75} height={size} className="drop-shadow-lg">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-section-text {
          font-family: 'Press Start 2P', cursive;
          font-size: 70px;
          font-weight: bold;
          fill: #000;
          letter-spacing: 8px;
        }
      `}</style>
      <text x="350" y="95" textAnchor="middle" className="pixel-section-text">
        {text}
      </text>
    </svg>
  )
}
