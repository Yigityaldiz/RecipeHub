export default function AddRecipe(){
    return(
        <div className="py-12 px-12 lg:px-8 text-left space-y-8  ">
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
        </div>
    )
}