import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './poc/Home'
import Login from './poc/Login'
import Chat from './components/chat'
import Not_Found from './components/Not_Found'
function App() {
  return(
    <>
    <h1>WhatsApp Clone</h1>
    <Routes>
      {/* { all routes listed here } */}
      <Route path='/' element={<Home />} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/chat/:chatId' element={<Chat/>}></Route>
      {/* { dynamic route with chatId as parameter with :} */}
      <Route path='*' element={<Not_Found/>}></Route>
      {/* { catch all unmatched routes with * and render Not_Found component } */}
    </Routes>
    </>
  )
}
export default App