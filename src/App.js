import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  function addRecipe(recipe={}) {
    const newRecipes = [...recipes, recipe];
    setRecipes(newRecipes);
  }

  function deleteRecipe(recipeToDelete={}) {
    const updatedRecipes = recipes.filter((recipe) => recipe !== recipeToDelete);
    setRecipes(updatedRecipes);
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <table>
    <thead>
      <tr key="index">
        <th>Name</th>
        <th>Cuisine</th>
        <th>Photo</th>
        <th>Ingredients</th>
        <th>Preparation</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>


    </tbody>
  </table>

      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />


    </div>
  );
}

export default App;
