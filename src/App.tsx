import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
// components
import Career from './components/Career'
// import Header from './components/Header'
import KeyVisual from './components/KeyVisual'
import Profile from './components/Profile'
import Skill from './components/Skill'
import WaveAnimation from './components/Wave'

function App (): ReactJSXElement {
  return (
    <div className="App">
      {/* <Header/> */}
      <KeyVisual/>
      <div className='bg-light'>
        <WaveAnimation/>
        <Profile/>
        <Career/>
        <Skill/>
      </div>
    </div>
  )
}

export default App
