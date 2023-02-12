import { type FC } from 'react'
// Style
import { Box, Card, Container, Grid, List, ListItem, ListItemText } from '@mui/material'
import '../css/index.css'
import '../css/Skill.css'
// devicon
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaLaravel, FaNodeJs, FaGithub, FaDocker } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { GrMysql } from 'react-icons/gr'
import { SiJavascript, SiTypescript } from 'react-icons/si'

function createData (
  devicon: JSX.Element,
  skill: string,
  content: string[]
  // work: string
) {
  return { devicon, skill, content }
}

const rows = [
  createData(
    <div><FaHtml5 /><FaCss3Alt /></div>,
    'HTML&CSS',
    [
      'BEM記法など命名規則を用いたコーディング',
      'SCSSコンパイル',
      'BootStrapのグリッドシステムを用いたレスポンシブ',
      'スクリプト読み込み'
    ]
  ),
  createData(
    <div ><SiJavascript /><SiTypescript /></div>,
    'Javascript/TypeScript',
    [
      '素のJavaScriptで静的ページに動的処理を実装',
      'JavaScriptライブラリの利用やAJAXを用いた非同期処理など',
      'JavaScriptのアルゴリズムをTypeScriptに書き換え',
      'ReactアプリをTypeScriptで実装。本ページはTypeScriptで実装している。'
    ]
  ),
  createData(
      <FaReact/>,
      'React',
      [
        'npm、Docker Composeを用いた環境構築',
        'API取得機能を備えた簡単なWebアプリを実装'
      ]
  ),
  createData(
      <FaPhp/>,
      'PHP',
      [
        '複雑なアルゴリズムの組み立て',
        'オブジェクト指向プログラミング',
        'Laravelフレームワークでアプリケーションを実装'
      ]
  ),
  createData(
      <FaLaravel/>,
      'Laravel',
      [
        'CRUD機能、画像アップロード機能、ログイン機能、API機能を備えたWebアプリ開発',
        'チーム開発でバックエンドを担当。SPA認証機能（API）を実装しフロントエンド（React）と接続。'
      ]
  ),
  createData(
      <FaNodeJs/>,
      'Node.js',
      [
        'npm/yarnでのパッケージインストール・環境構築',
        'DBと接続し簡単なCRUD機能を実装'
      ]
  ),
  createData(
      <GrMysql/>,
      'MySQL',
      [
        'SQL文でDBを操作',
        'PHPやNode.jsと接続したCRUD機能実装'
      ]
  ),
  createData(
      <FaDocker/>,
      'Docker',
      [
        'Dockerの仕組みを学習',
        'フロントエンド・バックエンド環境をDocker Composeで構築して開発を実施。']
  ),
  createData(
      <FaGithub/>,
      'GitHub',
      [
        'リポジトリ・ブランチを用いてコードを管理',
        'PullRequest機能を用いたコードレビュー'
      ]
  )
]

const Skill: FC = () => {
  return (
    <div>
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <p className='section-title'>Skill</p>
            </Box>
            <Box>
              {rows.map((row) => (
                <Card key={row.skill} sx={{ mb: 2, p: 2, color: 'primary.dark', bgcolor: 'primary.light' }} style={{ borderRadius: '2rem' }}>
                  <Grid container spacing={1}>
                    <Grid item md={12} lg={4}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', my: 0, py: 0, fontSize: '5rem', color: 'primary.main' }}>
                        {row.devicon}
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', my: 0, py: 0, fontSize: '1.5rem' }}>
                        {row.skill}
                      </Box>
                    </Grid>
                    <Grid item md={12} lg={8}>
                      <Box>
                        {row.content.map((row) => (
                          <List key={row} sx={{ my: 0, py: 0 }}>
                            <ListItem sx={{ my: 0, py: 0 }}>
                              <Box sx={{ fontSize: '1.5rem', my: 0, py: 0, color: 'primary.main' }}><FiCheck /></Box>
                              <ListItemText sx={{ ml: 2, my: 0, py: 0 }}>{row}</ListItemText>
                            </ListItem>
                          </List>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              ))}
            </Box>
        </Container>
    </div>
  )
}

export default Skill
