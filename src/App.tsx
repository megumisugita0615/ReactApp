import React from 'react'
// components
import Career from './components/Career'
import Header from './components/Header'
import KeyVisual from './components/KeyVisual'
import Profile from './components/Profile'
import Skill from './components/Skill'
// Style
// import { Container } from '@mui/material';

function App () {
  return (
    <div className="App">
      <Header/>
      <KeyVisual/>
      <Profile/>
      <Career/>
      <Skill/>
    </div>
  )
}

export default App
