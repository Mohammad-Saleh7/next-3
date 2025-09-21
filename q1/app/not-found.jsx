"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function notFound() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h1" component={"h1"}>
        404 ERROR
      </Typography>
    </Stack>
  );
}
