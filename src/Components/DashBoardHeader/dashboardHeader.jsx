import { TextField } from "@mui/material";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  AccountCircleIcon,
  NotificationsIcon,
  MenuIcon,
} from "../MatrailIcons";
import "./DshboardHeader.css";

const DashboardHeader = ({ screenWidth, setScreenWidth }) => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [scrool, setScroll] = useState(0);
  const currTheme = useSelector((state) => state.theme.theme.theme);
  const currMode = useSelector((state) => state.theme.theme.mode);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname, path]);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.addEventListener("scroll", () => {
        setScroll();
      });
    };
  }, [scrool]);

  return (
    <>
      <div
        className={`h-fit p-3  ease-in-out   li duration-100 ${
          scrool >= 100 ? "sticky top-3  rounded-xl " : null
        }`}
        style={
          scrool >= 100
            ? {
                boxShadow:
                  "rgb(255 255 255 / 90%) 0rem 0rem 0.0625rem 0.0625rem inset, rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
                backdropFilter: "saturate(200%) blur(1.875rem)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "rgb(52, 71, 103)",
                zIndex: "0",
              }
            : {
                backgroundColor: "transparent",
                color: currMode === "#F0F2F5" ? "black" : "white",
              }
        }
      >
        <div className="flex justify-between items-center ease-in-out duration-500">
          <div>
            {window.innerWidth <= 1000 ? (
              <MenuIcon
                className="cursor-pointer"
                onClick={() => setScreenWidth(!screenWidth)}
              />
            ) : (
              `${path === "/" || undefined ? "Home" : path} `
            )}
          </div>
          <div className="flex items-center">
            <div>
              <TextField
                className="text-white"
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
                fullWidth={false}
                inputProps={{
                  style: {
                    borderColor: "white",
                  },
                }}
                InputLabelProps={{
                  zindex: 0,
                  style: {
                    color: currMode === "#F0F2F5" ? "black" : "white",
                  },
                }}
              />
            </div>
            <div className="cursor-pointer p-1 flex items-center justify-center">
              <AccountCircleIcon style={{ color: currTheme }} />
            </div>
            <div className="cursor-pointer p-1 flex items-center justify-center">
              <NotificationsIcon style={{ color: currTheme }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
