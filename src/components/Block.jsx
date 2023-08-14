import { EditRecipes } from "./EditRecipe"



export const Block = ({recipes,setIsEditOpen,setEditRecipe}) =>{

    const handleClick = (selectitem) => {
        
        let newEditItem = recipes.find((elem)=>{
            return elem.id === selectitem
            
        })
        setEditRecipe(newEditItem)
        
        setIsEditOpen(true)
       
       }
       
      console.log("blocktaki recipes", recipes)
    



    return(
  <>
      { recipes?.map((recipe) =>(

        <div key={recipe.id} id ='block' className=' bg-gray-800  justify-center items-center w-[100%]  h-[100%] hover:outline-blue-600 rounded-lg outline outline-2  outline-blue-500 hover:outline-4  '>
            
            <h2 className=' h-[50px] font-bold text-[30px]  text-white underline '>{recipe.name}</h2>
            
            
            <img  id='blockImage' className=' className="  border h-[200px] w-[350px]  rounded-lg mx-4  float-left   ' src = {recipe.url} />
            
            <p  className="text-left text-green-50 h-[]  "> {recipe.recipe} </p>
           
            
            

            <div>
            <button
               onClick={()=>{handleClick(recipe.id)}}
              
               className='float-right shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2 mt-[200px] mr-3 mb-2  '>
                edit
                </button>
            </div>

            
              

             
            
            
            
            
             
        
         
    
         
         </div>
      ))}
 
     
       </>
    )
}