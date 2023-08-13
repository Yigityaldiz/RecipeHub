import { useState } from "react"



export const EditRecipes = ({setIsOpen, editRecipes ,storedItems ,setStoredItems ,setEditRecipes}) =>{

    const [newRecipe , setNewRecipe] = useState()
    const [newName , setNewName] = useState()
    const [newURL, setNewUrl] = useState()
    
    const handleDelete = () => {
        
        storedItems.map((elem,i) =>{
            if( editRecipes.id === elem.id ){
                storedItems.splice(i,1)
            }
           
        setStoredItems(storedItems)
        localStorage.setItem('recipes',JSON.stringify(storedItems))
        })
     
        setIsOpen(false)
    }

    const edit = (e) => {
        const updatedRecipes = storedItems.map((value) => {
            if (value.id === editRecipes.id) {
                return {
                    ...value,
                    recipe: newRecipe,
                    name: newName,
                    url: newURL
                    
                };
                
            }
            return value;
        });
    
        setStoredItems(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        setIsOpen(false);
    };




    

    
       
  


    return(




   

        

        <div  className="py-12 px-12 lg:px-8 text-left space-y-8   ">

            
        <div>
          
            <label htmlFor="name"> 
            Name:
               <p>{editRecipes.name}</p>
             
             </label>
        </div>
        <div>
          <form action="">
            
          <input
           
           onChange={(e)=> setNewRecipe(e.target.value)}
           type="text" defaultValue={editRecipes.recipe} />
        
          </form>
          </div>
         
       
       <div>
        
        
       </div>
        
       
        
        <button
       
        onClick={edit}
        className='float-right shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2   '>Save</button>

        <button
        
        onClick={handleDelete}
        
        className='float-right shadow-lg shadow-blue-500/50 text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2 mr-2  '>Delete</button>
       </div>








    
        
       













       
   )}