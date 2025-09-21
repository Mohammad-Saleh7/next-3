"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function error({ error, reset }) {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography> {error.message} </Typography>
      <button onClick={() => reset()}>Try Again</button>
    </Stack>
  );
}
