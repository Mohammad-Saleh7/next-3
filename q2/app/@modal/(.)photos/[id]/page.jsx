"use client";
import { useParams, useRouter } from "next/navigation";
import { Dialog, DialogContent, Typography } from "@mui/material";

export default function PhotoModal() {
  const { id } = useParams();
  const router = useRouter();

  const IMAGES = [
    "/pic-1.jpg",
    "/pic-2.jpg",
    "/pic-3.jpg",
    "/pic-4.png",
    "/pic-5.jpg",
  ];

  const src = IMAGES[Number(id) - 1] || IMAGES[0];

  return (
    <Dialog open onClose={() => router.back()} fullWidth>
      <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={src}
          alt={`photo ${id}`}
          style={{
            width: "500px",
            borderRadius: 8,
            padding: "10px",
          }}
        />
      </DialogContent>
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        ID:{id}
      </Typography>
    </Dialog>
  );
}
