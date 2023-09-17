import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
import Home from "../Home/Index.jsx";
import About from "../About/Index.jsx";
import Skill from "../Skill/Index.jsx";
import Services from "../Services/Index.jsx";
import Experience from "../Experience/Index.jsx";
import Contact from "../Contact/Index.jsx";
import Project from "../Projects/Index.js";
import "./Layout.css";

const drawerWidth = 300;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar-wrap">
      <div className="logo">
        <img src="/img/logo-dark.png" alt="Not available" />
      </div>
      <List>
        {SIDEBAR_ITEMS.map((element) => (
          <ListItem key={element.title}>
            <ListItemButton>
              <ListItemIcon>
                <b style={{ color: "#FF4C60" }}>{element.icon}</b>
              </ListItemIcon>
              <ListItemText>
                <b style={{ color: "#454360" }}>{element.title}</b>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { sm: "none" },
          "@media(max-width:768px)": {
            display: "none",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          "@media(max-width:768px)": {
            margin: "0",
            padding: "0",
          },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "yellow",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Home />
        <About />
        <Skill />
        <Services />
        <Experience />
        <Project />
        {/* <Slider /> */}
        {/* <Client /> */}
        <Contact />
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
};

export default Layout;

const SIDEBAR_ITEMS = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },

  {
    title: "About",
    icon: <PermIdentityIcon />,
  },
  {
    title: "Services",
    icon: <MedicalInformationIcon />,
  },
  {
    title: "Experience",
    icon: <SchoolIcon />,
  },
  {
    title: "Work",
    icon: <WorkIcon />,
  },
  {
    title: "Contact",
    icon: <CallIcon />,
  },
];
