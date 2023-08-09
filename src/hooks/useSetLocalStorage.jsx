

export default function useSetLocalStorage (name,recipe,url){

    const recipex= {
        name : name,
        recipe : recipe,
        url : url}


    const recipes = JSON.parse(localStorage.getItem('recipes') || "[]")
  

    recipes.push(recipex)
    localStorage.setItem('recipes', JSON.stringify(recipes)) 

   
    

     
}