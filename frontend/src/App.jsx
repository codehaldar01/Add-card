import { Routes, Route } from 'react-router-dom'
import Homepage from './customComponent/Homepage'
import CreateProduct from './customComponent/CreateProduct'
import Navbar from './customComponent/Navbar.jsx'
import EditCard from './customComponent/EditCard.jsx'
import { DarkModeContext } from './context/DarkModeContext.jsx'
import { useContext, useEffect } from 'react'
function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    const root = document.documentElement; // Access the <html> or <body> element
    if (isDarkMode) {
      console.log("dark mode is getting enabled")
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className='dark:bg-gray-700 dark:text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/edit/:id' element={<EditCard />} />
      </Routes>
    </div>
  )
}

export default App
