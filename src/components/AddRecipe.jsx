import useSetLocalStorage from "../hooks/useSetLocalStorage"

export default function AddRecipe({setName,setRecipe,setUrl,name,recipe,url,setIsOpen,setStoredItems,storedItems}){

   const addLocalStorage = (e)=>{
    
    useSetLocalStorage(name,recipe,url,setStoredItems,storedItems)
    }
    
    
    return(
      <div className="py-12 px-12 lg:px-8 text-left space-y-8   ">
       <div>
           <label htmlFor="name"> 
           Name:

             <input onChange={(e)=>{setName(e.target.value)  }}
               id="name"
                placeholder="Repice Name"
                type="text"
                className="bg-gray-50 border-black-300 text-gray-900 text-s rounded-lg w-full border-black border-2"
              />
            </label>
       </div>
       <div>
          <form>
              <label htmlFor="URL">Enter an URL:</label>
              <input 
              onChange={(e)=>{setUrl(e.target.value)  }}
              type="url"
              id="URL"
              placeholder="URL"
              className="bg-gray-50 border-black-300 text-gray-900 text-s rounded-lg w-full border-black border-2" />
          </form>
       </div>
      
      <div>
        <label htmlFor="recipe">
           Recipe:
         <textarea  onChange={(e)=>{setRecipe(e.target.value)  }}
         id="recipe"
         placeholder="Repice "
         type="text"
         className="bg-gray-50 border-black-300 text-gray-900 text-s rounded-lg w-full h-24 border-black border-2"
       />
       </label>
      </div>
       
      
       <img src="" alt="" />
       <button
       onClick={(e) =>{setIsOpen(false),addLocalStorage(e) }}
       
       className='float-right shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2   '>Save</button>
      </div>
  )
  }

   


   
    