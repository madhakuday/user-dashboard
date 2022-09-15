import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <>
      <Box className="bg-gray-200 p-3">
        <Typography className="text-center">Sign In</Typography>

        <Box className="flex flex-col w-2/4 m-auto">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            style={{ marginTop: "10px", marginLeft: "10px" }}
            size="small"
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            style={{ marginTop: "10px", marginLeft: "10px" }}
            size="small"
          />
          <Button
            variant="outlined"
            style={{ margin: "10px auto", width: "50%" }}
            color="secondary"
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
