import { type FC } from 'react'
// Style
import { Box, Container, Grid } from '@mui/material'
import '../css/index.css'
import '../css/Skill.css'
// devicon
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaLaravel, FaNodeJs, FaGithub, FaDocker } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiJavascript, SiTypescript } from 'react-icons/si'

function createData (
  devicon: JSX.Element,
  skill: string,
  content: string
  // work: string
) {
  return { devicon, skill, content }
}

const rows = [
  createData(
      <div><FaHtml5 className='devicon-spacing'/><FaCss3Alt className='devicon-spacing'/></div>,
      'HTML&CSS',
      'BEM記法など命名規則を用いたコーディング、SCSSコンパイルでの実装が可能。BootStrapのグリッドシステムを用いたレスポンシブも実装可能。'
  ),
  createData(
      <div className='devicon-spacing'><SiJavascript className='devicon-spacing'/><SiTypescript className='devicon-spacing'/></div>,
      'Javascript/TypeScript',
      '素のJavaScriptで静的ページに動的処理を実装。JavaScriptライブラリの利用やAJAXを用いた非同期処理なども可能。JavaScriptのアルゴリズムをTypeScriptに書き換え。ReactアプリをTypeScriptで実装。本ページはTypeScriptで実装している。'
  ),
  createData(
      <FaReact/>,
      'React',
      'npmやdocker composeを用いた環境構築、API取得機能を備えた簡単なWebアプリ実装を経験。本ページもReactで実装している。'
  ),
  createData(
      <FaPhp/>,
      'PHP',
      '複雑なアルゴリズムを組み立てることが可能。オブジェクト指向による記述も可能。Laravelフレームワークでアプリケーションを実装。'
  ),
  createData(
      <FaLaravel/>,
      'Laravel',
      'CRUD機能、画像アップロード機能、ログイン機能、API機能を備えたWebアプリ開発を経験。SPA認証機能（API）を実装しフロントエンド（React）との接続作業も経験。'
  ),
  createData(
      <FaNodeJs/>,
      'Node.js',
      'DBと接続し簡単なCRUD機能を実装できる。npm/yarnでのパッケージインストール・環境構築も経験。'
  ),
  createData(
      <GrMysql/>,
      'MySQL',
      'SQL文でDBを操作可能。PHPやNode.jsと接続したCRUD機能実装を経験。'
  ),
  createData(
      <FaDocker/>,
      'Docker',
      'Dockerの仕組みを学習。フロントエンド・バックエンド環境をDocker Composeで構築して開発を実施。'
  ),
  createData(
      <FaGithub/>,
      'GitHub',
      'リポジトリ・ブランチを用いてコードを管理。PullRequest機能を用いたコードレビューも実施。'
  )
]

const Skill: FC = () => {
  return (
    <div>
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <p className='section-title'>Skill</p>
            </Box>
            <Box className='skill-table'>
                  <Grid container spacing={1} >
                    {rows.map((row) => (
                        <Grid item lg={6} key={row.skill} className='skill-table-item'>
                              <Box className='skill-table-item-bg bg-light' sx={{ mb: 2, p: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                          <h1 className='skill-table-devicon middle-text'>{row.devicon}</h1>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 0 }}>
                                          <h2 className='skill-table-title dark-text'>{row.skill}</h2>
                                    </Box>
                                    {row.content}
                              </Box>
                        </Grid>
                    ))}
                  </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default Skill
