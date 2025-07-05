import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Task from "./components/Task";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Task  />} />
          </Routes>        
      </BrowserRouter>
      
    </>
  )
}

export default App;