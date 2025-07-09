import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from "./components/Task";
//Notificaciones
import { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Task  />} />
          <Route path="Task/:id" element={<Task />} />
        </Routes>
        < Toaster />        
      </BrowserRouter>
      
    </>
  )
}

export default App;