import { Alert } from "@mui/material";
import React from "react";

export function ErrorAllert({ message }) {
  return <Alert severity="error">{message}</Alert>;
}

export function SuccessAllert({ message }) {
  return <Alert severity="success">{message}</Alert>;
}

export function InfoAllert({ message }) {
  return <Alert severity="info">{message}</Alert>;
}
