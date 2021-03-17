import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-hooks-98ff6-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amout: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });
  }, []);

  useEffect(() => {
    console.log("Rendering", userIngredients);
    return () => {
      console.log("This component will be unmounted");
    };
  }, [userIngredients]);

  const addIngredientHandler = (ingredients) => {
    fetch(
      "https://react-hooks-98ff6-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredients),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setUserIngredients((prevState) => [
          ...prevState,
          { id: responseData.name, ...ingredients },
        ]);
      });
  };

  const removeIngredientHandler = (ingredientId) => {
    setUserIngredients((prevState) => {
      prevState.filter((ingredient) => ingredient.id !== ingredientId);
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
