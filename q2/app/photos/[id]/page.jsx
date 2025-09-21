"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export default function PhotoPage({ params }) {
  const IMAGES = [
    "/pic-1.jpg",
    "/pic-2.jpg",
    "/pic-3.jpg",
    "/pic-4.png",
    "/pic-5.jpg",
  ];

  const src = IMAGES[Number(params.id) - 1] || IMAGES[0];
  const { id } = useParams();

  return (
    <div>
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
      >
        ID:{id}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src={src}
          alt={`photo ${params.id}`}
          style={{ borderRadius: 8, width: "700px" }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained"> Download </Button>
      </Box>
    </div>
  );
}
