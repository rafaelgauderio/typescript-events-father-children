import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {


  return (
    <>
      <h2>Projeto React tutorial sobre eventos entre componentes pai e filho</h2>
      <ChildComponent></ChildComponent>
    </>

  )
}

export default App
