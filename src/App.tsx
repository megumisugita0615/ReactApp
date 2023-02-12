import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
// Style
import { Box, Card, Container } from '@mui/material'
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
        main: '#87bcc1',
        dark: '#006D77',
        contrastText: '#c18787'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ color: 'primary.dark' }}>
        <Header />
        <KeyVisual/>
        <TsParticles />
        <Box sx={{ bgcolor: 'transparent' }}>
          <WaveAnimation/>
          <Box sx={{ pt: '120vh' }}>
            <Container>
              <Card sx={{ p: 5, mb: 5, color: 'primary.dark' }} style={{ borderRadius: '5rem' }}><Profile/></Card>
              <Card sx={{ p: 5, mb: 5, color: 'primary.dark' }} style={{ borderRadius: '5rem' }}><Career/></Card>
              <Card sx={{ p: 5, mb: 5, color: 'primary.dark' }} style={{ borderRadius: '5rem' }}><Skill/></Card>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
