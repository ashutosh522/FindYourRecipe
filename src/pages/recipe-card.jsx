import { useNavigate } from "react-router-dom";
function RecipeCard({ foodItem }) {
  const navigate = useNavigate()

  function handleRedirectToDetailsPage(id) {
    navigate(`/details/${id}`)
  }
  return (

    <div class="col-md-3">
      <div class="card">
        <img
          src={foodItem.image} alt="Product Image" />
        <div class="card-body">
          <h5 class="card-title">{foodItem.name}</h5>
          <p class="card-text">Cuisine: {foodItem.cuisine}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="h6 mb-0">Meal Type: {foodItem.mealType[0]}</span>
            <div>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-half text-warning"></i>
              <small class="text-muted">{foodItem.rating}</small>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between bg-light">
          <button class="btn btn-primary btn-sm"
            onClick={() => handleRedirectToDetailsPage(foodItem.id)}
          >Show Details</button>
          <button class="btn btn-outline-secondary btn-sm" onClick={() => alert(`You have saved ${foodItem.name}'s recipe.`)}><i class="bi bi-heart"></i></button>
        </div>
      </div>

    </div>

  )
}
export default RecipeCard;