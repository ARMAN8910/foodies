import React from "react";
import "../Styles.scss";

function ReceipCard({ hit }) {
  return (
    <div className="receipe-card">
      <div className="image-container">
        <img src={hit.recipe.image} alt={hit.recipe.label} />
      </div>
      <div className="recipe-details">
        <h2>{hit.recipe.label}</h2>
        <p>Calories: {hit.recipe.calories.toFixed(2)}</p>
        <p>Cuisine Type: {hit.recipe.cuisineType}</p>
        <p>Diet Labels: {hit.recipe.dietLabels.join(", ")}</p>
        <p>Meal Type: {hit.recipe.mealType.join(", ")}</p>
        <a href={hit.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
      </div>
    </div>
  );
}

export default ReceipCard;
