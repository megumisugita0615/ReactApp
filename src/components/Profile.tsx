// Style
import { Box, Container, Grid } from '@mui/material'
import '../css/index.css'
import '../css/Profile.css'
// images
import profilePhoto from '../img/profilephoto.png'

const Profile = (): JSX.Element => {
  const profileIntro =
  <div>
    <p>都内在住のWebエンジニア。PHPとJavaScriptを使います。最近はAdobeツールも触り始めました。</p>
    <p>エンジニアリングもディレクションもバランスよく、職種にとらわれないデジタルクリエイターを目指しています。</p>
    <p>穏やかな性格ですが、譲れないものは譲れません。「とりあえずやってみる」と「後ろ向きな言葉を使わない」ことを大切にしています。</p>
  </div>

  return (
    <div>
      <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <p className='section-title'>About</p>
          </Box>
          <Grid container spacing={2} alignItems='center' justifyContent='center' >
            <Grid item lg={6}>
              <Box>
                <img src={profilePhoto} className="profile-photo" alt="profile" />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box>{profileIntro}</Box>
            </Grid>
          </Grid>
      </Container>
    </div>
  )
}

export default Profile
