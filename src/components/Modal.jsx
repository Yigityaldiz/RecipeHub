import addRecipe from "./AddRecipe"

export default function Modal ({setIsOpen,children,addRecipe}){
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
            
        <div className="w-[500px]  flex flex-col" >
        <button type="button" className="text-white text-xl place-self-end " onClick={() =>{setIsOpen(false)}} > X </button>
        <div className="bg-white p-2" > {children}</div> 
        </div>
       
        
      </div>
    )
} 