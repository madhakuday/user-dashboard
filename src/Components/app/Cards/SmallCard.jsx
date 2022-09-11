import { Box, Card, Typography } from "@mui/material";
import React from "react";

const SmallCard = ({ title, des, amount, Icons }) => {
  return (
    <>
      <Card
        className="p-5 bg-yellow-600 h-full  flex items-center flex-col justify-center "
        style={{
          borderRadius: "1rem",
        }}
      >
        <Box
          style={{
            background:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
          }}
          className="p-3   w-fit rounded-lg flex items-center flex-col justify-center"
        >
          {Icons}
        </Box>
        <Typography
          style={{
            fontSize: "1rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          }}
          className="p-2 font-serif"
        >
          {title}{" "}
        </Typography>
        <Typography
          style={{
            fontSize: "0.75rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          }}
          className="p-2 font-serif"
        >
          {des}
        </Typography>

        <hr className="m-2 mb-2" style={{ color: "red", width: "70%" }} />
        <Typography className="font-serif">{amount}</Typography>
      </Card>
    </>
  );
};

export default SmallCard;
