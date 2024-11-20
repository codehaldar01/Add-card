import {Routes, Route} from 'react-router-dom'
import Homepage from './customComponent/Homepage'
import CreateProduct from './customComponent/CreateProduct'
import Navbar from './customComponent/Navbar.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreateProduct />} />
      </Routes>
      </>
  )
}

export default App
