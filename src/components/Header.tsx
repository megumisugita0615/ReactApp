import { type FC } from 'react'
// style
import { AppBar, Box, Link, Toolbar } from '@mui/material'
import '../css/index.css'

const Header: FC = () => {
  const Logo = 'M.S'

  return (
    <div>
        <AppBar position="fixed" elevation={0} >
          <Toolbar>
            <Box sx={{ mx: 2, display: 'flex' }}>
              <Link href="#" underline="none" color='primary.dark' className='header-logo-button'>
                <h1 className='signature'>{Logo}</h1>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header
