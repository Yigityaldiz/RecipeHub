import Modal from "./Modal"
import { EditRecipes } from "./EditRecipe"

export const Block = ({recipes,setIsOpen,isOpen}) =>{

    const handleClick = () => {
        {setIsOpen(true)}
       }



    return(
  <>
      {recipes.map((recipe) =>(

        <div  id ='block' className=' bg-gray-800  justify-center items-center  h-[300px] hover:outline-blue-600 rounded-lg outline outline-2  outline-blue-500 hover:outline-4  '>
            

            <img  id='blockImage' className=' className="  border h-[150px] w-[250px]  rounded-lg m-2  ' />
            <div className='items-center flex justify-center'>
              <p className='   h-[100px] items-center flex text-white underline'>jhasfjashfkjashfjksfasdsadsadsd</p>
              </div>
              <button
               onClick={handleClick}
               className='float-right shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2 m  '>
                Save
                </button>
            
            
            
            
             
        
         
    
         
         </div>
      ))}
 
      <div>
      {isOpen &&   
      <Modal setIsOpen={setIsOpen} >
      <EditRecipes setIsOpen={setIsOpen}  /> 
      </Modal > }
      </div>
       </>
    )
}