export default function Modal ({setIsOpen}){
    return(
        <div className="flex  bg-black/20 justify-center h-screen w-screen ">
            <button type="button" className="border " onClick={() =>{setIsOpen(false)}} > close </button>
        <form className="w-500 h-96 bg-white rounded border-solid  bg-blue-400/50 border-4  " >
        <input  type="text" className="rounded-full border-2 border-slate-600 border-solid px-4 bg-blue-400/50 " />
        <input type="text" className="rounded-full border-2 border-slate-600 border-solid px-4 bg-blue-400/50 " />
        <input type="url" className="rounded-full border-2 border-slate-600 border-solid px-4 bg-blue-400/50" />
        </form>
        
      </div>
    )
} 