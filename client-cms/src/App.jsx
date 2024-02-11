import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'

import router from './routers'
function App() {
  // const[page, setPage] = useState('login')
  // const [search, setSearch] = useState("")

  // let token = localStorage.access_token
  // useEffect(() => {
  //   if(token) {
  //     setPage('home')
  //   } else {
  //     setPage('login')
  //   }
  // },[])

  return (
    <>
      <RouterProvider router={router} />
      {/* <Login setPage={setPage}/> */}
      {/* {!token && <Login setPage={setPage}/>}
      <br />
      {token && page === 'home' && <Nav setPage={setPage} setSearch={setSearch}/>}
      {token && page === 'home' && <Home search={search}/>} */}
    </>
  )
}

export default App
