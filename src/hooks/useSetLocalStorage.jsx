

export default function useSetLocalStorage (name,recipe,url,setStoredItems){

    const recipex= {
        name : name,
        recipe : recipe,
        url : url,
        id :  Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1) 
    }


    const recipes = JSON.parse(localStorage.getItem('recipes') || "[]")
  

    recipes.push(recipex)
    localStorage.setItem('recipes', JSON.stringify(recipes)) 
    setStoredItems(JSON.parse(localStorage.getItem('recipes') || "[]"))




   
    

     
}