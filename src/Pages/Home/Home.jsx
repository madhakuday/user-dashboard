import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import ChartExample from "../../Components/Charts/HomeChart";
import { ArrowDownwardIcon, PaidIcon } from "../../Components/Icons";
const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row ">
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid xs={12} md={12}>
            <Box
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)) ,url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrD3RyTkrGtbRpJ8ifm8mTQDub-2DbtGsRw&usqp=CAU')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
              }}
              className="p-5"
            >
              <Typography className="p-5 font-mono" style={{ color: "white" }}>
                Hey John , <br /> Download Letest Report
              </Typography>

              <Button
                variant="contained"
                size="small"
                style={{ marginLeft: "15px" }}
                endIcon={<ArrowDownwardIcon />}
              >
                Download
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Box
              className="p-5 mt-2 h-full"
              style={{ background: "#1E4DB5", borderRadius: "9px" }}
            >
              <Box className="flex justify-between text-white">
                <Typography>Earning</Typography>
                <PaidIcon
                  style={{
                    fontSize: "2rem",
                    color: "#1F96F8",
                    background: "white",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box className="p-3">
                <Typography style={{ color: "white", fontSize: "1.8rem" }}>
                  $93,444.40
                </Typography>
                <Typography style={{ fontSize: "12px", color: "white" }}>
                  Monthlu revenue
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Box
              className="md:p-5 p-8 mt-5 md:mt-2 md:ml-2 h-full "
              style={{
                borderRadius: "9px",
                boxShadow: "0px 0px 3px 1px",
                backgroundImage:
                  "url('https://media.istockphoto.com/photos/multi-exposure-of-virtual-creative-financial-chart-hologram-on-modern-picture-id1330945638?b=1&k=20&m=1330945638&s=170667a&w=0&h=kM3lvK9K8xA8BD5QIpVHVY-1HxaqNiVRxqjoDPGwd6E=')",
                backgroundSize: "100% 100%",
              }}
            >
              <Box className="flex justify-between">
                <Typography className="font-sans">
                  monthli sales
                  <br />
                  <Typography>3,143</Typography>
                </Typography>
                <PaidIcon
                  style={{
                    fontSize: "2rem",
                    color: "#1F96F8",
                    background: "white",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid xs={12} md={12}>
            <Box>
              <Box>
                <Typography>Sales Overview</Typography>
                <Box>
                  <Typography>* Ample</Typography>
                  <Typography>* Pixel Admin</Typography>
                  <ChartExample />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
