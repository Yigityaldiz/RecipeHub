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

 
  

  return (
    
    <div className='p-10 text-center  h-screen bg-gray-800 grid   '>
      
      <div className='bg-gray-600 pb] h-[100px] '>
        <h1>RECIPES</h1>
      <button
      type='submit'
      onClick={handleClick}
      className='text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-5 py-2  mr-5 float-right'>
      Create New one
     
      </button>
      </div>
      
      <div className='p-20 bg-gray-500 h-[700px] grid grid-cols-2 gap-4'>
      <div className='bg-gray-800'></div>
      <div className='bg-gray-800'></div>
      <div className='bg-gray-800'></div>
      <div className='bg-gray-800'></div>
      <div className='bg-gray-800'></div>
      <div className='bg-gray-800'></div>

      




      {isOpen &&   
      <Modal setIsOpen={setIsOpen} >
      <AddRecipe name={name} recipe={recipe} url={url} setName ={setName} setRecipe = {setRecipe} setUrl={setUrl} setIsOpen={setIsOpen} /> 
      </Modal> }
      </div>
 
      
      
    
     

    </div>
    
    
  )
}

export default App
