


export const EditRecipes = ({setIsOpen, recipes}) =>{

   
    const handleDelete = (itemToDelete) => {
     { setIsOpen(false)}
    }

    console.log(recipes)
        
  


    return(




   

        

        <div  className="py-12 px-12 lg:px-8 text-left space-y-8   ">

            
        <div>
          
            <label htmlFor="name"> 
            Name:
               <p>{recipes.name}</p>
             
             </label>
        </div>
        <div>
          
        </div>
       
       <div>
        
        
       </div>
        
       
        
        <button
       
       
        className='float-right shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2   '>Save</button>

        <button
        
        onClick={handleDelete}
        
        className='float-right shadow-lg shadow-blue-500/50 text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2 mr-2  '>Delete</button>
       </div>








    
        
       













       
   )}