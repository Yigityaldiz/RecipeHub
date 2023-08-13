

export default function Modal ({setIsOpen,children,isOpen}){
    return(
    
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center  ">
            
        <div className="w-[40%]  flex flex-col" >
        <button type="button" className="text-white text-xl place-self-end " onClick={() =>{setIsOpen(false)}} > X </button>
        <div className="bg-white p-2 rounded-lg border-2 border-stone-800/25 " > {children}</div> 
        </div>
       
        
      </div>
    )
} 