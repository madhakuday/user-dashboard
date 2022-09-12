import * as React from "react";
import { Box, Drawer, Button, Divider, Radio, Typography } from "@mui/material";
import { SettingsIcon, MailIcon, InboxIcon } from "../../Icons";
import store from "../../../redux/store";
import { theme } from "../../../redux/ThemeSlice";
import { useSelector } from "react-redux";
const ColorBuutonArray = [
  { color: "#f20a0a", CName: "red" },
  { color: "#fca903", CName: "gold" },
  { color: "#295DD0", CName: "blue" },
  { color: "#c40afc", CName: "purple" },
];
const ThemeBuutonArray = [
  { color: "#0f121c", CName: "dark" },
  { color: "#F0F2F5", CName: "light" },
];

function getLocalData() {
  const LocalData = JSON.parse(localStorage.getItem("theme"));
  if (LocalData) {
    return LocalData;
  } else {
    localStorage.setItem(
      "theme",
      JSON.stringify({ selectedValue: "#295DD0", selectedMode: "#F0F2F5" })
    );
    return LocalData;
  }
}
export default function SettingDrawer() {
  const localStorageData = getLocalData();

  const [state, setState] = React.useState({
    right: false,
  });

  const [selectedValue, setSelectedValue] = React.useState(
    localStorageData?.selectedValue
  );
  const [selectedMode, setSelectedMode] = React.useState(
    localStorageData?.selectedMode
  );

  const currTheme = useSelector((state) => state.theme.theme.theme);

  React.useEffect(() => {
    if (selectedValue || selectedMode) {
      localStorage.setItem(
        "theme",
        JSON.stringify({ selectedMode, selectedValue })
      );
    }
  }, [selectedMode, selectedValue]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleMode = (mode) => {
    setSelectedMode(mode);
  };
  store.dispatch(
    theme({
      theme: selectedValue,
      mode: selectedMode,
    })
  );

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <SettingsIcon
          style={{ color: currTheme }}
          className="cursor-pointer hover:rotate-90 hover:transition-all hover:ease-in-out hover:duration-500 "
        />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box
          className=" p-2"
          role="presentation"
          //   onClick={toggleDrawer("right", false)}
          //   onKeyDown={toggleDrawer("right", false)}
        >
          <Box className="p-2">
            <Typography className="text-center p-2">Theme</Typography>
            <Box>
              {ThemeBuutonArray.map((theme, ind) => {
                return (
                  <React.Fragment key={ind}>
                    <Button
                      variant="outlined"
                      onClick={() => handleMode(theme.color)}
                    >
                      {theme.CName}
                    </Button>
                  </React.Fragment>
                );
              })}
            </Box>
          </Box>
          <Divider />
          <Box className="p-2">
            <Typography className="text-center p-2">Color</Typography>
            <Box>
              <div>
                {ColorBuutonArray.map((color, ind) => {
                  return (
                    <React.Fragment key={ind}>
                      <Radio
                        {...controlProps(color.color)}
                        style={{ color: color.color }}
                        sx={{
                          color: color.color,
                          "&.Mui-checked": {
                            color: color.color,
                          },
                        }}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
