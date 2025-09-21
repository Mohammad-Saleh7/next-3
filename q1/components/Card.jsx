"use client";
import { Box } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

export default function Card({ href, title, subtitle }) {
  const router = useRouter();
  return (
    <Box sx={{ border: "2px solid black", padding: "10px" }}>
      <div> {title} </div>
      {subtitle && <div>{subtitle}</div>}
      <button onClick={() => router.push(href)}>View Details</button>
    </Box>
  );
}
