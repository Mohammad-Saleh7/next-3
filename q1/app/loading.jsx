"use client";
import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h2" component={"h2"}>
        <CircularProgress />
        Loading...
      </Typography>
    </Stack>
  );
}
