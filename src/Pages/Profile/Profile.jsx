import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { CreateIcon } from "../../Components/Icons";
import UserList from "../../Components/app/UserList/UserList";
const Profile = () => {
  return (
    <>
      <div className="">
        <Box>
          <Box>
            <Box>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQDtO0vJ3KM0JqHV8YiRSgW-B4u71jkrrhw&usqp=CAU"
                alt=""
                style={{ margin: "auto", borderRadius: "50%" }}
                width="50px"
              />
            </Box>
            <Grid container sx={{ flexGrow: 1 }} className="p-2" gap={2}>
              <Grid xs={12} md={5}>
                <Box className="rounded-2xl p-3 bg-slate-300 h-full ">
                  <Typography className="text-center">Profile</Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    component="form"
                    autoComplete="off"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "25ch",
                      },
                    }}
                  >
                    <TextField
                      id="filled-basic"
                      label="Name"
                      variant="filled"
                      style={{ marginTop: "10px", marginLeft: "10px" }}
                    />
                    <TextField
                      id="filled-basic"
                      label="Surname"
                      variant="filled"
                      style={{ marginTop: "10px", marginLeft: "10px" }}
                    />
                    <TextField
                      id="filled-basic"
                      label="Email"
                      variant="filled"
                      style={{ marginTop: "10px", marginLeft: "10px" }}
                    />
                  </Box>
                  <Button className="w-full" variant="outlined">
                    Update
                  </Button>
                </Box>
              </Grid>

              <Grid xs={12} md={6}>
                <Box
                  className="rounded-2xl p-3 bg-slate-300 h-full "
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <UserList />
                </Box>
              </Grid>
              <Grid xs={12} md={12}>
                <Box className="rounded-2xl p-3 bg-slate-300 h-full ">
                  <Typography className="text-center">
                    About me{" "}
                    <CreateIcon
                      className="float-right cursor-pointer "
                      style={{ fontSize: "1rem" }}
                    />
                  </Typography>
                  <Typography className="p-2">
                    Hey, this is my homepage, so I have to say something about
                    myself. Sometimes it is hard to introduce yourself because
                    you know yourself so well that you do not know where to
                    start with. Let me give a try to see what kind of image you
                    have about me through my self-description. I hope that my
                    impression about myself and your impression about me are not
                    so different. Here it goes.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Profile;
