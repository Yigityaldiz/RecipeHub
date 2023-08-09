import { useEffect, useState } from 'react'
import Modal from './components/Modal';
import './App.css'
import { createPortal } from 'react-dom';
import AddRecipe from './components/AddRecipe';
import { Block } from './components/Block';
import { EditRecipes } from './components/EditRecipe';




// const recipes = JSON.parse(localStorage.getItem('recipes') || "[]")

function App() {

 
 
 const [isOpen, setIsOpen] = useState(false);
 const [name ,setName] = useState(null);
 const [recipe , setRecipe] = useState(null);
 const [url,setUrl] = useState(null)
 const [rec,setRec] = useState()
 const storedItems = JSON.parse(localStorage.getItem('recipes'))

 EditRecipes()
 
 
 

 
 const handleClick = () => {
  setIsOpen(true)
 }

  useEffect(()=>{
    
    console.log(storedItems)
    
  },)

  return (
    
    <div className='p-2 text-center  h-auto bg-gray-800 grid  '>
      
      <div className='bg-gray-600 pb] h-[300px] '>
        <h1>RECIPES</h1>
      <button
      type='submit'
      onClick={handleClick}
      className='text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-5 py-2  mr-5 float-right'>
      Create New one
     
      </button>
      </div>
      
      <div  id ='main' className='p-4 bg-gray-500 h-[573px] my-2 grid grid-cols-3 gap-4 border rounded-lg  '>
        <Block recipes ={storedItems} setIsOpen = {setIsOpen} isOpen ={isOpen} />
        

       

     
      </div>
      
      
      
     
      



    <div>
      {isOpen &&   
      <Modal setIsOpen={setIsOpen} >
      <AddRecipe name={name} recipe={recipe} url={url} setName ={setName} setRecipe = {setRecipe} setUrl={setUrl} setIsOpen={setIsOpen} /> 
      </Modal > }
      </div>

      
 
      
      
    
     

    </div>
    
    
  )
}

export default App
