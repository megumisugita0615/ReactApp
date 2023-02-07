import { type FC } from 'react'
// Style
import { Box, Container } from '@mui/material'
import '../css/index.css'
import '../css/Profile.css'
// images
import profilePhoto from '../img/my-profile.png'

const Profile: FC = () => {
  const profileIntro =
  <div>
    <p>東京在住のWebエンジニア。デジタルマーケティング支援企業に勤務。</p>
    <p>PHPとJavaScriptをよく書いています。最近はReactに力を入れて勉強中です。</p>
    <p>人と一緒にものを作り上げていくことが大好きです。エンジニアリングもディレクション、どちらでもプロフェッショナルなクリエイターを目指しています。</p>
  </div>

  return (
    <div>
      <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', color: 'primary.contrastText' }}>
              <p className='section-title'>About</p>
          </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mr: 2 }}>
                  <img src={profilePhoto} className="profile-photo" alt="profile" />
              </Box>
              <Box className='profile-intro' sx={{ mb: 10 }}>
                  {profileIntro}
              </Box>
      </Container>
    </div>
  )
}

export default Profile
