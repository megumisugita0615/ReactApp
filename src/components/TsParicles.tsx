import { useCallback } from 'react'
import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Box } from '@mui/material'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
// import type { Container, Engine } from 'tsparticles-engine'
import type { Engine } from 'tsparticles-engine'
import '../css/TsParticles.css'

const TsParticles = (): ReactJSXElement => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  // const particlesLoaded = useCallback(async (container?: Container | undefined): Promise<void> => {
  //   await console.log(container)
  // }, [])

  return (
    <Box className='tsparticles' sx={{ mt: '100%' }}>
        <Particles
            id='tsparticles'
            init={particlesInit}
            // loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: '#e7eeee'
                }
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: 'push'
                  },
                  onHover: {
                    enable: false,
                    mode: 'repulse'
                  },
                  resize: true
                },
                modes: {
                  push: {
                    quantity: 4
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  }
                }
              },
              particles: {
                number: {
                  value: 24,
                  density: {
                    enable: false,
                    value_area: 1200
                  }
                },
                color: {
                  value: '#87bcc1'
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 1,
                    color: '#569FA5'
                  },
                  polygon: {
                    nb_sides: 12
                  },
                  image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.6,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 60,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false,
                  distance: 10,
                  color: '#ffffff',
                  opacity: 1,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: 'top',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              detectRetina: true
            }}
        />
        </Box>
  )
}

export default TsParticles
