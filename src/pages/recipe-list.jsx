import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context";
import RecipeCard from "./recipe-card";
function RecipePage() {
  const { data, loading, searchResults } = useContext(ShoppingCartContext)




  return (
    <>
      {/* {loading ? <h3>Loading Data...</h3>: ''} */}

      <h3 class="text-center" style={searchResults.length === 0 ? { display: 'none' } : {}}>There {searchResults.length !== 1 ? 'are' : 'is'} {searchResults.length} recipe{searchResults.length !== 1 ? 's' : ''} matching your search.</h3>

      {searchResults.length === 0 ? (
        <p></p>
      ) : (
        <div>
          {/* If there's only one result, show the details directly */}
          {searchResults.length === 1 ? (
            <div className="container py-5">

              <div className="row">
                {/* Recipe Image */}
                <div className="col-md-6 mb-4">
                  <div className="card">
                    <img src={searchResults[0].image} className="card-img-top" alt="Product Image" />
                  </div>
                </div>

                {/* Recipe Details */}
                <div className="col-md-6">
                  <h1 className="h2 mb-3">{searchResults[0].name} 🍽</h1>
                  <div className="mb-3">
                    <span className="h5 me-2 fw-light">Cuisine: {searchResults[0].cuisine}</span>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center">
                      <span className="text-muted">
                        Rating: {searchResults[0].rating}⭐
                        ({searchResults[0].reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  <p className="mb-4">
                    <h6 className="mb-2">Ingredients:</h6>
                    {searchResults[0].ingredients.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </p>
                  <p className="mb-4">
                    <h6 className="mb-2">Instructions:</h6>
                    {searchResults[0].instructions.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </p>

                  {/* Recipe Additional Info */}
                  <div className="mb-4">
                    <div className=" align-items-center">
                      <p className="me-2">💪Calories: {searchResults[0].caloriesPerServing} cal</p>
                      <p className="me-2">⌛Cooking Time: {searchResults[0].prepTimeMinutes
                      } mins</p>
                      <p className="me-2">🍵Cooking Type: {searchResults[0].difficulty}</p>
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => alert(`You have saved ${searchResults[0].name}'s recipe.`)}
                    >
                      Save this Recipe for later
                    </button>
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="far fa-heart me-2"></i>Continue to Recipe List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // If there are multiple results, display them in a list
            <div class="row g-4">

              {
                searchResults.map((result) =>
                  <RecipeCard foodItem={result}></RecipeCard>
                )
              }
            </div>

          )}
          <hr />
        </div>
      )}

      {loading ? <h3 class="text-center">Loading your data</h3> : <div>
        <h3 class="text-center">Some of our beloved recipes</h3>
        <div class="row g-4">
          {data.map((foodItem) => <RecipeCard foodItem={foodItem}></RecipeCard>)}
        </div>
        <hr />
      </div>}
    </>
  )
}
export default RecipePage