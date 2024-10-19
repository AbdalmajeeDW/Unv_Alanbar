import * as React from "react";
import Button from "@mui/material/Button";
import BasicModal from "./BasicModal";

export default function ContainedButtons({ title,action }) {
  return (
    <>
  <Button className="BTN" onClick={action}>{title}</Button>

    </>
);
}
