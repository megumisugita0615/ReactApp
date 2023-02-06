import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
// Style
import { Box } from '@mui/material'
// components
import Career from './components/Career'
// import Header from './components/Header'
import KeyVisual from './components/KeyVisual'
import Profile from './components/Profile'
import Skill from './components/Skill'
import TsParticles from './components/TsParicles'
import WaveAnimation from './components/Wave'

function App (): ReactJSXElement {
  return (
    <div className="App">
      {/* <Header/> */}
      <Box>
        <KeyVisual/>
      </Box>
      <Box sx={{ mt: '100' }}>
        <TsParticles />
      </Box>
      <Box className='bg-trans'>
        <WaveAnimation/>
        <Box sx={{ pt: 10 }}>
          <Profile/>
          <Career/>
          <Skill/>
        </Box>
      </Box>

    </div>
  )
}

export default App
