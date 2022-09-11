import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import { AddIcon, CreateIcon } from "../../Icons";
import masterCardLogo from "../../../assets/images/logos/mastercard.png";

const PaymentCards = ({ Icon, num }) => {
  return (
    <>
      <Box
        className="flex justify-between p-3 rounded-2xl flex items-center  md:w-2/5 w-full    sm:w-full x "
        style={{ border: "1px solid black" }}
      >
        <img src={masterCardLogo} alt="Logo" width="10%" />

        <Typography variant="h6" fontWeight="medium">
          ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp; {num}
        </Typography>

        <Tooltip title="Edit Card" placement="top">
          <Icon className="cursor-pointer" />
        </Tooltip>
      </Box>
    </>
  );
};
const PayMentCard = () => {
  return (
    <>
      <Box className="w-full bg-white p-3 rounded-2xl h-full  ">
        <Box className="flex justify-between">
          <Box>
            <Typography
              className="  font-serif "
              style={{ color: "rgb(52, 71, 103)" }}
            >
              Payment Method
            </Typography>
          </Box>
          <Box>
            <Button
              className="font-serif"
              style={{
                background:
                  "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                color: "white",
              }}
              startIcon={<AddIcon />}
            >
              Add new card
            </Button>
          </Box>
        </Box>
        <Box className="flex justify-between p-2 md:justify-between xs:flex-col ">
          <PaymentCards num={7852} Icon={AddIcon} />
          <PaymentCards num={5248} Icon={CreateIcon} />
        </Box>
      </Box>
    </>
  );
};

export default PayMentCard;
