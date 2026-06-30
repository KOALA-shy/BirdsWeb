import { PixelQBirdHead } from './PixelBird'

export default function BackgroundPattern() {
  const birdHeads = []
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      birdHeads.push({
        id: `${i}-${j}`,
        type: (i + j) % 2 === 0 ? 'blue' : 'white',
        x: j * 140 + (i % 2 === 1 ? 70 : 0),
        y: i * 160,
      })
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" viewBox="0 0 2000 2600" preserveAspectRatio="xMidYMid slice">
        {birdHeads.map(bird => (
          <g key={bird.id} transform={`translate(${bird.x}, ${bird.y})`}>
            <PixelQBirdHead type={bird.type} size={80} opacity={0.15} />
          </g>
        ))}
      </svg>
    </div>
  )
}
