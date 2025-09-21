import { getData } from "@/utils/dataServices";
import { Typography } from "@mui/material";
import React from "react";

export default async function page({ params }) {
  const user = await getData(`https://dummyjson.com/users/${params.id}`);
  if (!user?.id) {
    return null;
  }
  return (
    <div>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age} </p>
    </div>
  );
}
