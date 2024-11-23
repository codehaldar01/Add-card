import {Routes, Route} from 'react-router-dom'
import Homepage from './customComponent/Homepage'
import CreateProduct from './customComponent/CreateProduct'
import Navbar from './customComponent/Navbar.jsx'
import EditCard from './customComponent/EditCard.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/edit/:id' element={<EditCard />} />
      </Routes>
      </>
  )
}

export default App
