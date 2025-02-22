import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams

function RecipeDetails() {
  const { id } = useParams(); // Extract id from the URL parameters
  const [recipe, setRecipe] = useState();
  const navigate = useNavigate()

  async function fetchRecipe() {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    console.log(data);
    setRecipe(data);
  }

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  return (
    <>
      {recipe ? (
        <div className="container py-5">
          <div className="row">
            {/* <Recipe Images */}
            <div className="col-md-6 mb-4">
              <div className="card">
                <img src={recipe.image} className="card-img-top" alt="Product Image" />
              </div>
            </div>

            {/* Recipe Details */}


            <div className="col-md-6">
              <h1 className="h2 mb-3">{recipe.name}🍽</h1>
              <div className="mb-3">
                <span className="h5 me-2 fw-light">Cuisine: {recipe.cuisine}</span>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <span className="text-muted">
                    Rating: {(recipe.rating).toFixed(1)}⭐
                    ({recipe?.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <p className="mb-2">
                <h6 className="mb-2">Ingredients:</h6>
                {recipe?.ingredients?.map((element) => <li key={element}>{element}</li>)}
              </p>

              <p className="mb-4">
                <h6 className="mb-2">Instructions:</h6>
                {recipe?.instructions?.map((element) => <li key={element}>{element}</li>)}
              </p>

              {/* Recipe Additional Info */}
              <div className="mb-4">
                <div className="align-items-center">
                  <p className="me-2">💪Calories: {recipe.caloriesPerServing} cal</p>
                  <p className="me-2">⌛Cooking Time: {recipe.prepTimeMinutes} mins</p>
                  <p className="me-2">🍵Cooking Type: {recipe.difficulty}</p>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={() => alert(`You have saved ${recipe.name}'s recipe.`)}>Save this Recipe for later</button>
                <button className="btn btn-outline-secondary" type="button" onClick={() => navigate('/')} >
                  <i className="far fa-heart me-2"></i>Continue to Recipe List
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 class="text-center">Loading data...</h3>
      )}
    </>
  );
}

export default RecipeDetails;
