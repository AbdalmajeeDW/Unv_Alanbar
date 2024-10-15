import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";

export function FullWidthButton({
  isLoading,
  disable,
  text,
  variant,
  onclick,
  type,
}) {
  return (
    <Box sx={{ height: "36px", m: 1, position: "relative" }}>
      {!isLoading && (
        <Button
          type={type}
          fullWidth
          onClick={onclick}
          variant={variant}
          disable={disable}
        >
          {text}
        </Button>
      )}
      {isLoading && (
        <CircularProgress
          size={27}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </Box>
  );
}

export function NormalButton({
  isLoading,
  disable,
  text,
  variant,
  onclick,
  type,
  color,
  size,
}) {
  return (
    <Box sx={{ height: "36px", m: 1, position: "relative" }}>
      {!isLoading && (
        <Button
          color={color}
          type={type}
          onClick={onclick}
          variant={variant}
          disable={disable}
          size={size}
        >
          {text}
        </Button>
      )}
      {isLoading && (
        <CircularProgress
          size={27}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </Box>
  );
}
