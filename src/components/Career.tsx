import { type FC } from 'react'
// Style
import { Box, Container, Grid } from '@mui/material'
import '../css/index.css'
import '../css/Career.css'

function createData (
  year: string,
  content: string
) {
  return { year, content }
}

const rows = [
  createData('2022.3', '公立大学 文学部を卒業。'),
  createData('2022.4', 'デジタルマーケティング支援企業に新卒入社。'),
  createData('2022.5', '未経験エンジニアとしてプログラミング研修を開始。バックエンド、フロントエンドを広く体系的に学習。')
]

const Career: FC = () => {
  return (
    <div>
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <p className='section-title'>Career</p>
            </Box>
            <Box className='career-table' sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className='career-table-bg bg-light' sx={{ py: 2, px: 2 }}>
                    {rows.map((row) => (
                        <Box sx={{ mb: 1 }} key={row.year}>
                            <Grid container spacing={1}>
                                <Grid item lg={3}>
                                    <Box sx={{ pr: 2, display: 'flex', justifyContent: 'flex-end' }}>{row.year}</Box>
                                </Grid>
                                <Grid item lg={9}>{row.content}</Grid>
                            </Grid>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default Career
