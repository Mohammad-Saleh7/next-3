import React from "react";
import { getData } from "@/utils/dataServices";
import Card from "@/components/Card";
export default async function Post() {
  const data = await getData("https://dummyjson.com/posts");
  const posts = data.posts?.slice(0, 5) || [];

  return (
    <div>
      {posts.map((item) => (
        <Card
          key={item.key}
          href={`/posts/${item.id}`}
          title={item.title}
          subtitle={item.body?.slice(0, 20)}
        />
      ))}
    </div>
  );
}
