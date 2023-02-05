import { type FC } from 'react'
// Style
import { Box, Container } from '@mui/material'
import '../css/index.css'
import '../css/Profile.css'
// images
import profilePhoto from '../img/my-profile.png'

const Profile: FC = () => {
  const profileIntro =
    '東京在住のWebエンジニア。デジタルマーケティング支援企業に勤務。未経験のWebエンジニアとして新卒入社し、実際に開発しながらWeb技術を広く学習。得意分野はバックエンド。フロントエンドとWebデザインも精力的に学習中。'

  return (
    <div>
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <p className='section-title'>About</p>
            </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mr: 2 }}>
                    <img src={profilePhoto} className="profile-photo" alt="profile-photo" />
                </Box>
                <Box className='profile-intro' sx={{ mb: 10 }}>
                    <p>{profileIntro}</p>
                </Box>
        </Container>
    </div>
  )
}

export default Profile
