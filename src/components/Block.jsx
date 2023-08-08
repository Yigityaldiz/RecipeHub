export const Block = ({recipes}) =>{



    return(
        <>
        {recipes.map((recipe,i)=>( <div  id ='block' className=' bg-gray-800 flex justify-center hover:outline-blue-600 rounded-lg outline outline-2  outline-blue-500 hover:outline-4  '>
<img key={i} id='blockImage' className=' className=" border h-[150px] w-[220  px]  rounded-lg m-2  ' src  = {recipe.url}/>











</div>))}
</>


        
    )
}

