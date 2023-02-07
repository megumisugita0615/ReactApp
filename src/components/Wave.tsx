import { type FC } from 'react'
// Style
import '../css/index.css'
import '../css/Wave.css'
// Library
import Wave from 'react-wavify'

const WaveAnimation: FC = () => {
  const mainColor = '#87bcc1'
  const literColor = '#e7eeee'
  const darkColor = '#569FA5'
  const accentColor = '#006D77'

  function createData (
    zindex: number,
    height: string,
    color: string,
    waveHeight: number,
    speed: number,
    points: number
  ) {
    return { zindex, height, color, waveHeight, speed, points }
  }

  const waveInfo = [
    createData(1, '35%', mainColor, 60, 0.20, 4),
    createData(2, '34%', darkColor, 60, 0.10, 5),
    createData(3, '33%', mainColor, 80, 0.20, 6),
    createData(4, '32%', darkColor, 60, 0.20, 7),
    createData(5, '31%', literColor, 80, 0.10, 8),
    createData(6, '30%', mainColor, 60, 0.20, 9),
    createData(7, '28%', darkColor, 60, 0.15, 10),
    createData(8, '25%', accentColor, 60, 0.20, 11),
    createData(9, '22%', mainColor, 70, 0.10, 12),
    createData(10, '20%', literColor, 90, 0.15, 13)
  ]

  return (
    <div>
        {waveInfo.map((wave) => (
            <div key={wave.zindex} style={{ position: 'absolute', bottom: 0, zIndex: wave.zindex, width: '100%', height: wave.height }}>
                <Wave fill={wave.color}
                    paused={false}
                    options={{
                      height: wave.waveHeight,
                      amplitude: 30,
                      speed: wave.speed,
                      points: wave.points
                    }}
                />
            </div>
        ))}
    </div>
  )
}

export default WaveAnimation
