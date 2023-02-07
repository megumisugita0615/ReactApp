import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
// Style
import { Box, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
// components
import Career from './components/Career'
import Header from './components/Header'
import KeyVisual from './components/KeyVisual'
import Profile from './components/Profile'
import Skill from './components/Skill'
import TsParticles from './components/TsParicles'
import WaveAnimation from './components/Wave'

function App (): ReactJSXElement {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#e7eeee',
        main: 'transparent',
        dark: '#87bcc1',
        contrastText: '#006D77'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ color: 'primary.contrastText' }}>
        <Header/>
        <KeyVisual/>
        <TsParticles />
        <Box sx={{ bgcolor: 'primary.main' }}>
          <WaveAnimation/>
            <Box sx={{ pt: '120vh' }}>
              <Container>
                <Profile/>
                <Career/>
                <Skill/>
              </Container>
            </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
