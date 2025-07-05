import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Task from "./components/Task"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <main className='font-bold flex h-screen justify-center items-center w-full text-gray-600'>
          <Task  />
        </main>
        
      </BrowserRouter>
      
    </>
  )
}

export default App;