import { useEffect, useState } from 'react'
import Modal from './components/Modal';
import './App.css'
import { createPortal } from 'react-dom';
import AddRecipe from './components/AddRecipe';



function App() {

 const [isOpen, setIsOpen] = useState(false);
 const handleClick = () => {
  setIsOpen(true)
 }
 const [name ,setName] = useState(null);
 const [recipe , setRecipe] = useState(null);
 const [url,setUrl] = useState(null)

 useEffect(()=>{


 },[])

 console.log()
  

  return (
    
    <div className='p-10 text-center justify-center items-center flex h-screen '>
      
      <div>
      <button
      type='submit'
      onClick={handleClick}
      className='text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-5 py-2  mr-5'>
      Create New one
     
      </button>
      </div>
      
      <div className='p-20'>
      {isOpen &&   <Modal setIsOpen={setIsOpen} > <AddRecipe name ={setName} recipe = {setRecipe} url={setUrl} /> </Modal> }
      </div>
      
    
     

    </div>
    
    
  )
}

export default App
