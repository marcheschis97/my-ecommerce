import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a mi Ecommerce"/>
    </div>
  )
}

export default App
