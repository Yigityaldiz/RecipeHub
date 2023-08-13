

export default function useSetLocalStorage (name,recipe,url,setStoredItems,storedItem){

    const recipex= {
        name : name,
        recipe : recipe,
        url : url,
        id :  Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1) 
    }


   

    storedItem.push(recipex)
    localStorage.setItem('recipes', JSON.stringify(storedItem)) 
    setStoredItems(JSON.parse(localStorage.getItem('recipes') || "[]"))




   
    

     
}