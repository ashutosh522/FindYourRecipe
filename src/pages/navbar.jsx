import { useContext } from "react";
import { ShoppingCartContext } from "../context";
function Navbar() {
  const { searchValue, setSearchValue, HandleSearchBtn } = useContext(ShoppingCartContext)
  return (
    <>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" ><strong>RecipeZone</strong></a>
          <h3 style={{textAlign:'center', color:'white', marginLeft:'160px'}}>🍛🍴🍵</h3> 
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search"
              placeholder="Search your recipe here" aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)} />
            <button class="btn btn-outline-success" type="submit" onClick={HandleSearchBtn}>Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}
export default Navbar;