import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext(null)
function RecipeContext({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  async function fetchRecipe() {

    const apiResponse = await fetch('https://dummyjson.com/recipes');
    const data = await apiResponse.json();
    //console.log(data.recipes);

    setData(data.recipes)
    setLoading(false);
  }

  useEffect(() => {
    fetchRecipe()
  })

  async function fetchRecipeOfID() {

    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    console.log(data);
    setRecipe(data);
  }



  useEffect(() => {
    fetchRecipeOfID()
  }, [])

  async function fetchCustomSearch(search) {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
    const data = await apiResponse.json()
    console.log(data.recipes)
    setSearchResults(data.recipes)
  }
  function HandleSearchBtn(e) {
    e.preventDefault();
    console.log('You have searched for', searchValue)
    setSearchValue('')
    fetchCustomSearch(searchValue)
    setSearchResults(data)
  }

  return (
    <ShoppingCartContext.Provider value={{ data, setData, loading,searchValue, setSearchValue, HandleSearchBtn, searchResults }}>{children}</ShoppingCartContext.Provider>
  )
}
export default RecipeContext;