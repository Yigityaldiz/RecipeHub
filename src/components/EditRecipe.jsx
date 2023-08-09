


export const EditRecipes = ({setIsOpen, items,recipes}) =>{

   
    const handleDelete = (itemToDelete) => {
       
        
    }


    return(



      
        
        <div className="py-12 px-12 lg:px-8 text-left space-y-8   ">
        <div>
            <label htmlFor="name"> 
            Name:
 
              <input 
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
              
               type="url"
               id="URL"
               placeholder="URL"
               className="bg-gray-50 border-black-300 text-gray-900 text-s rounded-lg w-full border-black border-2" />
           </form>
        </div>
       
       <div>
         <label htmlFor="recipe">
            Recipe:
          <input  
          id="recipe"
          placeholder="Repice "
          type="text"
          className="bg-gray-50 border-black-300 text-gray-900 text-s rounded-lg w-full h-24 border-black border-2"
        />
        </label>
       </div>
        
       
        <img src="" alt="" />
        <button
       
        
        className='float-right shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2   '>Save</button>

        <button
        
        onClick={handleDelete }
        
        className='float-right shadow-lg shadow-blue-500/50 text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2 mr-2  '>Delete</button>
       </div>



















       
   )}