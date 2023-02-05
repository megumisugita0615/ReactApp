import { type FC } from 'react'
// Style
import { Box, Container } from '@mui/material'
import '../css/index.css'
import '../css/Skill.css'
// devicon
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaLaravel, FaNodeJs, FaGithub, FaDocker } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiJavascript, SiTypescript } from 'react-icons/si'

function createData (
  devicon: any,
  skill: string,
  content: string,
  work: string
) {
  return { devicon, skill, content, work }
}

const rows = [
  createData(
        <FaHtml5/>,
        'HTML&CSS',
        '命名規則を用いたコーディングが可能。スタイルシートやスクリプトなどの読み込みもスムーズに実施。アプリ開発のたびに触れていて、最も慣れている言語。',
        '整備中'
  ),
  createData(
        <FaCss3Alt/>,
        'CSS',
        'BEM記法、SCSSコンパイルでの実装を経験。BootStrapのグリッドシステムを用いてレスポンシブを実装可能。',
        '整備中'
  ),
  createData(
        <SiJavascript/>,
        'Javascript',
        '素のJavaScriptで静的ページに動的処理を実装。JavaScriptライブラリの利用やAJAXを用いた非同期処理なども可能。',
        '整備中'
  ),
  createData(
        <SiTypescript/>,
        'TypeScript',
        'JavaScriptのアルゴリズムをTypeScriptに書き換え。ReactアプリをTypeScriptで実装。本ページもTypeScriptで実装している。',
        '整備中'
  ),
  createData(
        <FaReact/>,
        'React',
        'npmやdocker composeを用いた環境構築、API取得機能を備えた簡単なWebアプリ実装を経験。本ページもReactで実装している。',
        '整備中'
  ),
  createData(
        <FaPhp/>,
        'PHP',
        'アルゴリズムの組み立て、オブジェクト指向プログラミング。',
        '整備中'
  ),
  createData(
        <FaLaravel/>,
        'Laravel',
        'CRUD機能、画像アップロード機能、ログイン機能、API機能を備えたWebアプリ開発を経験。SPA認証機能（API）を実装しフロントエンド（React）との接続作業も経験。',
        '整備中'
  ),
  createData(
        <FaNodeJs/>,
        'Node.js',
        'DBと接続し簡単なCRUD機能を実装できる。npm/yarnでのパッケージインストール・環境構築も経験。',
        '整備中'
  ),
  createData(
        <GrMysql/>,
        'MySQL',
        'SQL文でDBを操作可能。PHPやNode.jsと接続したCRUD機能実装を経験。',
        '整備中'
  ),
  createData(
        <FaDocker/>,
        'Docker',
        'Dockerの仕組みを学習。フロントエンド・バックエンド環境をDocker Composeで構築して開発を実施。',
        '整備中'
  ),
  createData(
        <FaGithub/>,
        'GitHub',
        'リポジトリ・ブランチを用いてコードを管理。PullRequest機能を用いたコードレビューも実施。',
        '整備中'
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
                    {rows.map((row) => (
                        <Box className='skill-table-bg bg-light' sx={{ mb: 2, p: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <h1 className='skill-table-devicon middle-text'>{row.devicon}</h1>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 0 }}>
                                <h2 className='skill-table-title dark-text'>{row.skill}</h2>
                            </Box>
                            {row.content}
                            実際の制作物はこちら（{row.work}）。
                        </Box>
                    ))}
            </Box>
        </Container>
    </div>
  )
}

export default Skill
