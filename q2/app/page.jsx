"use client";
import {
  CardActionArea,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  const IMAGES = [
    { id: 1, src: "/pic-1.jpg" },
    { id: 2, src: "/pic-2.jpg" },
    { id: 3, src: "/pic-3.jpg" },
    { id: 4, src: "/pic-4.png" },
    { id: 5, src: "/pic-5.jpg" },
  ];

  return (
    <div>
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Image Gallery
      </Typography>
      <ImageList>
        {IMAGES.map((img) => (
          <ImageListItem key={img.id}>
            <CardActionArea
              LinkComponent={Link}
              href={`/photos/${img.id}`}
              sx={{
                transition: "1s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <img
                src={img.src}
                alt={`photo ${img.id}`}
                style={{ width: "100%", borderRadius: 8 }}
              />
            </CardActionArea>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
