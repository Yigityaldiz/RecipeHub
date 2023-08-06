import { useEffect, useState } from 'react'
import Modal from './components/Modal';
import './App.css'
import { createPortal } from 'react-dom';



function App() {

 const [isOpen, setIsOpen] = useState(false);
 const handleClick = () => {
  setIsOpen(true)
 }

 useEffect(()=>{


 },[])

 console.log()
  

  return (
    
    <div className='p-10 text-center '>
      
      <button
      type='submit'
      onClick={handleClick}
      className='text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-5 py-2 text-center mr-5'>
      Create New one
     
      </button>
      <div className='p-20'>
      {isOpen &&   <Modal setIsOpen={setIsOpen} >ahjklsfkasfasf</Modal> }
      </div>
      
    
     

    </div>
    
    
  )
}

export default App
