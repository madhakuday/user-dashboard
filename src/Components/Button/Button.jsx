import { Button } from "@mui/material";
import React from "react";

const ButtonComp = ({ text, type, color, style }) => {
  return (
    <div>
      <Button variant={type} color={color} style={style}>
        {text ? text : "Click me"}
      </Button>
    </div>
  );
};

export default ButtonComp;
