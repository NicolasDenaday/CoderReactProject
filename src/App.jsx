import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Hola, bienvenido a nuestra tienda!"/>
    </>
  )
}

export default App
