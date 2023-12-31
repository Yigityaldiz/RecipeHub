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
 const [isEditOpen, setIsEditOpen] = useState(false);

 const [name ,setName] = useState(null);
 const [recipe , setRecipe] = useState(null);
 const [url,setUrl] = useState(null)
 const [editRecipe , setEditRecipe]= useState()
 
 const items = JSON.parse(localStorage.getItem('recipes') || "[]")

 const[storedItems ,setStoredItems] = useState(items)

 

console.log(storedItems)
 
 
 

 
 const handleClick = () => {
  setIsOpen(true)
  
 }

  useEffect(()=>{
   
   
    
  },)

  return (
    
    <div className='p-4 text-center  bg-[#B1B2FF] grid h-screen   '>
      
      <div className='  h-[300px]    '>
        <h1 className='font-bold text-[100px] text-color-[#AAC4FF] h-[120px]'>RecipeHub</h1>
       
        <button
      type='submit'
      onClick={handleClick}
      className='text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-m rounded-lg px-5 py-2   h-[50px]  my-[120px] ml-[1120px]'>
      Create New one
     
      </button>
        
     
      </div>
      
      <div  id ='main' className='p-4 bg-[#D2DAFF] h-[100%] my-2 grid grid-cols-1 overflow-x-auto gap-4 border rounded-lg  '>
        <Block recipes ={storedItems} setIsOpen = {setIsOpen} setIsEditOpen ={setIsEditOpen} setEditRecipe = {setEditRecipe} />

        

       

     
      </div>
      
      
      
     
      



    <div>
      {isOpen &&   
      <Modal setIsOpen={setIsOpen} >
      <AddRecipe name={name} recipe={recipe} url={url} setName ={setName} setRecipe = {setRecipe} setUrl={setUrl} setIsOpen={setIsOpen} setStoredItems = {setStoredItems} storedItems={storedItems} /> 
      </Modal > }
      </div>

      <div>

      {isEditOpen &&   
      <Modal setIsOpen={setIsEditOpen} >
      <EditRecipes setIsOpen={setIsEditOpen}  editRecipes={editRecipe} setEditRecipe={setEditRecipe} storedItems ={storedItems} setStoredItems ={setStoredItems}  /> 
      </Modal > }
      </div>

      
 
      
      
    
     

    </div>
    
    
  )
}

export default App
