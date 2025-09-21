import Card from "@/components/Card";
import { getData } from "@/utils/dataServices";
import React from "react";

export default async function Recipes() {
  const data = await getData("https://dummyjson.com/recipes");
  const recipes = data.recipes?.slice(0, 5) || [];
  return (
    <div>
      {recipes.map((item) => (
        <Card
          key={item.id}
          href={`/recipes/${item.id}`}
          title={item.name}
          subtitle={`Calories: ${item.caloriesPerServing}`}
        />
      ))}
    </div>
  );
}
