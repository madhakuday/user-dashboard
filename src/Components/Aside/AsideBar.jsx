import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  TableChartIcon,
  ReceiptLongIcon,
  AccountCircleIcon,
  LoginIcon,
  CloseIcon,
} from "../MatrailIcons";
const ListArray = [
  { text: "Home", Icons: <HomeIcon style={{ fontSize: "1.2rem" }} /> },
  { text: "Table", Icons: <TableChartIcon style={{ fontSize: "1.2rem" }} /> },
  {
    text: "Billing",
    Icons: <ReceiptLongIcon style={{ fontSize: "1.2rem" }} />,
  },
  {
    text: "profile",
    Icons: <AccountCircleIcon style={{ fontSize: "1.2rem" }} />,
  },
  { text: "Sign in", Icons: <LoginIcon style={{ fontSize: "1.2rem" }} /> },
];
const AsideBar = ({ setScreenWidth }) => {
  const [navScreenWidth, setnavScreenWidth] = useState(window.innerWidth);
  const currTheme = useSelector((state) => state.theme.theme.theme);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setnavScreenWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", () => {
      setnavScreenWidth();
    });
  }, []);

  return (
    <>
      <div className="bg-neutral-700 h-full rounded-2xl relative transition-all ease-in-out duration-500">
        {navScreenWidth <= 1000 && (
          <Box
            className="absolute right-1 top-1  cursor-pointer transition-all ease-in-out duration-500"
            onClick={() => setScreenWidth(true)}
          >
            <CloseIcon style={{ fontSize: "1rem", color: "white" }} />
          </Box>
        )}
        <div className="flex  justify-center items-center p-1">
          <img
            src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
            className=""
            alt="Logo"
            style={{ width: "20%", borderRadius: "50%" }}
          />
        </div>

        <hr
          style={{
            width: "70%",
            margin: "auto",
            borderColor: "gold",
            marginTop: "8px",
          }}
        />

        <ul className="p-4 flex flex-col text-white">
          {ListArray.map((x, i) => {
            return (
              <React.Fragment key={i}>
                <NavLink
                  className="text-lg"
                  to={x.text.toLowerCase().replace(" ", "-")}
                  onClick={() =>
                    navScreenWidth <= 1000 ? setScreenWidth(true) : ""
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "white",
                    background: isActive ? currTheme : "transparent",
                    borderRadius: "0.5rem",
                  })}
                >
                  <li
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = currTheme;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "";
                    }}
                    className="mt-1 mb-1 p-2 flex item-center   rounded-lg cursor-pointer ease-in-out duration-300"
                  >
                    <p className="pr-2">{x.Icons}</p>

                    {x.text}
                  </li>
                </NavLink>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AsideBar;
