import { type FC } from 'react'
import { AppBar, Box } from '@mui/material'

const Header: FC = () => {
  const Logo = 'M.S'

  return (
        <div>
            <div>
                <AppBar position="fixed" className='header-navbar' color="inherit">
                    <Box sx={{ mx: 2, display: 'flex' }}>
                        <h1 className='header-logo signature'>{Logo}</h1>
                    </Box>
                </AppBar>
            </div>
        </div>
  )
}

export default Header
