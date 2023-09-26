
import './App.css'

import GrantParentComponent from './components/GrandFatherComponent'
import GrandFatherComponent from './components/GrandFatherComponent'

function App() {


  return (
    <>
      <h2>Projeto React tutorial sobre eventos entre componentes pai e filho</h2>     
      <GrandFatherComponent></GrandFatherComponent>
    </>

  )
}

export default App
