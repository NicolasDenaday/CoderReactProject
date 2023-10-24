import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Bienvenida from './components/bienvenida/bienvenida';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route exact path='/' element={<Bienvenida greeting={"Hola, bienvenidos a nuestra tienda"}/>} />
      <Route exact path='/products' element={<ItemListContainer />} />
      <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      <Route exact path='/category/:nombreCategoria' element={<ItemListContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
