import { useEffect, useState } from 'react'
import Nav from './components/NavBar'
import './App.css'
import Home from './components/Home'
import { RouterProvider } from 'react-router-dom'
// import router from './routers'
// import router from '../routers'
import router from './routers'

function App() {
  // const[page, setPage] = useState('home')


  return (
    <>
      <RouterProvider router={router} />
      {/* <Nav setPage={setPage} setSearch={setSearch} setCategorySearch={setCategorySearch} setOrder={setOrder}/>
      <br />
      {page === 'home' && <Home search={search} searchCategory={searchCategory} order={order}/>} */}

    </>
  )
}

export default App
