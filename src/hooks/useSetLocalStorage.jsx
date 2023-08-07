

export default function useSetLocalStorage (name,recipe,url){


    const recipes = JSON.parse(localStorage.getItem('recipes') || "[]")
  

    let recipex= {
    name : name,
    recipe : recipe,
    url : url}

    recipes.push(recipex)
    

     localStorage.setItem('recipes', JSON.stringify(recipes))
}