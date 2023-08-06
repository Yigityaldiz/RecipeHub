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
    
    <div id='main' className='clipping-container  border  bg-stone-800 h-screen flex  justify-center '>
      <div className='item-center w-96 h-8  '>
      <button
      type='submit'
      onClick={handleClick}
      className='rounded-full border-2 border-slate-600 border-solid px-4 bg-blue-400/50'>
      button
      </button>
      </div>
    
      {isOpen &&   <Modal setIsOpen={setIsOpen} />  }

    </div>
    
    
  )
}

export default App
