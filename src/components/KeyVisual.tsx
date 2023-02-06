import { type FC } from 'react'
// Style
import { Box, Container } from '@mui/material'
import '../css/index.css'
import '../css/KeyVisual.css'

const KeyVisual: FC = () => {
  const keyTitle = 'Megumi Sugita'
  const keyMessage = 'Welcome to my portfolio page!'

  return (
    <div>
        <div className='key-bg'>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'block' }}>
                        <h1 className='key-title signature'>{keyTitle}</h1>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <p className='key-intro dark-text'>{keyMessage}</p>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    </div>
  )
}

export default KeyVisual
