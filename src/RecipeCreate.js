import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = (event) => {
    setFormData({...formData,
    [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Name"
          required={true}
        />
            </td>
            <td>
            <input
          id="cuisine"
          type="text"
          name="cuisine"
          onChange={handleChange}
          value={formData.cuisine}
          placeholder="Cuisine"
          required={true}
        />
            </td>
            <td>
            <input
          id="photo"
          type="url"
          name="photo"
          onChange={handleChange}
          value={formData.photo}
          placeholder="URL"
          required={true}
        />
            </td>
            <td>
              <textarea
              id="ingredients"
              name="ingredients"
              onChange={handleChange}
              value={formData.ingredients}
              placeholder="Ingredients"
              required={true}
              />
            </td>
            <td>
            <textarea
              id="preparation"
              name="preparation"
              onChange={handleChange}
              value={formData.preparation}
              placeholder="Preparation"
              required={true}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
