import { QBirdHead } from './BirdSVG'

export default function BackgroundPattern() {
  const birdHeads = []
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      birdHeads.push({
        id: `${i}-${j}`,
        type: (i + j) % 2 === 0 ? 'blue' : 'white',
        x: j * 120 + (i % 2 === 1 ? 60 : 0),
        y: i * 130,
      })
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1000 1300">
        {birdHeads.map(bird => (
          <g key={bird.id} transform={`translate(${bird.x}, ${bird.y})`}>
            <QBirdHead type={bird.type} size={50} opacity={0.08} />
          </g>
        ))}
      </svg>
    </div>
  )
}
