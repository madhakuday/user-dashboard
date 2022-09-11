import { createTheme, ThemeProvider } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import SettingDrawer from "../../Components/app/SettingDrawer/Drawer";
import AsideBar from "../../Components/Aside/AsideBar";
import DashboardHeader from "../../Components/DashBoardHeader/dashboardHeader";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const [screenWidth, setScreenWidth] = useState(false);
  const [screenWidthnum, setScreenWidthNum] = useState(window.innerWidth);
  const currMode = useSelector((state) => state.theme.theme.mode);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidthNum(window.innerWidth);
      if (window.innerWidth <= 1000) {
        setScreenWidth(true);
      } else {
        setScreenWidth(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth();
      });
    };
  }, [screenWidth, screenWidthnum]);
  return (
    <>
      <div
        className="flex p-3  justify-between h-full min-h-screen "
        style={{ background: currMode }}
      >
        <div
          className={`${screenWidth ? "hidden" : "block"} `}
          style={{ zIndex: "1" }}
        >
          <div
            className="fixed top-2 left-2  "
            style={{ height: "94%", width: "250px", marginTop: "12px" }}
          >
            <AsideBar setScreenWidth={setScreenWidth} />
          </div>
        </div>
        <div className={`${screenWidthnum <= 1000 ? "" : "ml-64"} w-full `}>
          <DashboardHeader
            setScreenWidth={setScreenWidth}
            screenWidth={screenWidth}
          />
          <Outlet />
        </div>
        <div className="fixed bottom-3 right-3">
          <SettingDrawer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
