import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import React from "react";
import {
  DarkMode,
  EditNote,
  Home,
  LightMode,
  Settings,
  SignalWifi0BarRounded,
  Smartphone,
} from "@mui/icons-material";

const Sidebar = ({mode, setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#internet">
            <ListItemIcon>
              <SignalWifi0BarRounded/>
            </ListItemIcon>
            <ListItemText primary="Internet" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#techblog">
            <ListItemIcon>
              <EditNote/>
            </ListItemIcon>
            <ListItemText primary="Tech Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#mobileblog">
            <ListItemIcon>
              <Smartphone/>
            </ListItemIcon>
            <ListItemText primary="Mobile Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
    
        <ListItem disablePadding>
          <ListItemButton component="a" href="#mode">
            <ListItemIcon>
              {mode === "light" ? <DarkMode /> : <LightMode/>}
              
            </ListItemIcon>
            <Switch onChange={()=>setMode(mode === "light" ? "dark" : "light")}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
