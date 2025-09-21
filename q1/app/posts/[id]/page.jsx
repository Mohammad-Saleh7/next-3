import { getData } from "@/utils/dataServices";
import React from "react";

export default async function page({ params }) {
  const post = await getData(`https://dummyjson.com/posts/${params.id}`);

  if (!post?.id) {
    return null;
  }

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>{post.tags?.join(", ")}</p>
    </div>
  );
}
