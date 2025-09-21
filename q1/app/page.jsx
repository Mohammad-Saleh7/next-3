"use client";
import { Box, Typography } from "@mui/material";
import React, { Suspense } from "react";
import Users from "./users/page";
import Post from "./posts/page";
import Recipes from "./recipes/page";

export default function page() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
      <section>
        <Typography variant="h2"> Users </Typography>
        <Suspense
          fallback={
            <Typography variant="body1" color="red">
              Loading Users...
            </Typography>
          }
        >
          <Users />
        </Suspense>
      </section>
      <section>
        <Typography variant="h3"> Posts </Typography>
        <Suspense
          fallback={<Typography color="red">Loading Posts...</Typography>}
        >
          <Post />
        </Suspense>
      </section>

      <section>
        <Typography variant="h3"> Recipes </Typography>
        <Suspense
          fallback={<Typography color="red">Loading Recipes...</Typography>}
        >
          <Recipes />
        </Suspense>
      </section>
    </Box>
  );
}
