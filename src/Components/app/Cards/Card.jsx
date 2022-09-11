import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import pattern from "../../../assets/images/illustrations/pattern-tree.svg";
import Icon from "@mui/material/Icon";
import masterCardLogo from "../../../assets/images/logos/mastercard.png";

const CardComp = () => {
  return (
    <div>
      <Card
        style={{
          position: "relative",
          background: "#37373C",
          borderRadius: "1rem",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          opacity={0.2}
          sx={{
            backgroundImage: `linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25)),url(${pattern})`,
            // backgroundImage: `linear-gradient(rgba(0,0,0,0.75) , rgba(0,0,0,0.75)),url(${pattern})`,

            backgroundSize: "cover",
          }}
        />
        <Box position="relative" p={2}>
          <Box color="white" p={1} lineHeight={0} display="inline-block">
            <Icon fontSize="default">wifi</Icon>
          </Box>
          <Typography
            variant="h5"
            color="white"
            fontWeight="medium"
            sx={{ mt: 3, mb: 5, pb: 1 }}
          >
            4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp; 4594 &nbsp;&nbsp;7852
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <Box mr={3} lineHeight={1}>
                <Typography
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  opacity={0.8}
                >
                  Card Holder
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  Uday madhak
                </Typography>
              </Box>
              <Box lineHeight={1}>
                <Typography
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  opacity={0.8}
                >
                  Expires
                </Typography>
                <Typography variant="h6" color="white" fontWeight="medium">
                  11/12
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end" width="20%">
              <img src={masterCardLogo} alt="master card" width="60%" mt={1} />
            </Box>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default CardComp;
