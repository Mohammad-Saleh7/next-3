import { getData } from "@/utils/dataServices";
import React from "react";

export default async function page({ params }) {
  const recipes = await getData(`https://dummyjson.com/recipes/${params.id}`);
  return (
    <div>
      <h3>{recipes.name}</h3>
      <p>Calories: {recipes.caloriesPerServing}</p>
      <p>Difficulty: {recipes.difficulty}</p>
      <p>Cook time: {recipes.cookTimeMinutes} mins</p>
    </div>
  );
}
