import Card from "@/components/Card";
import { getData } from "@/utils/dataServices";
import { Key } from "@mui/icons-material";
import React from "react";

export default async function Users() {
  const data = await getData("https://dummyjson.com/users");
  const users = data.users?.slice(0, 5) || [];
  return (
    <div>
      {users.map((item) => (
        <Card
          key={item.id}
          href={`/users/${item.id}`}
          title={`${item.firstName} ${item.lastName} `}
          subtitle={item.email}
        />
      ))}
    </div>
  );
}
