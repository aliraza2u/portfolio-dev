import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
import Index from "../Home/Index.jsx";
import About from "../About/Index.jsx";
import Skill from "../Skill/Index.jsx";
import Services from "../Services/Index.jsx";
import Experience from "../Experience/Index.jsx";
import Client from "../Client/Index.jsx";
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
    <div>
      <Toolbar />
      {/* <Divider /> */}
      <div className="logo">
        <img src="/img/logo-dark.png" alt="Not available" />
      </div>
      <List className="list">
        {SIDEBAR_ITEMS.map((element) => (
          <ListItem
            key={element.title}
            sx={{
              marginTop: "-60px",
              marginLeft: "37px",
            }}
          >
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
      <footer className="footer">
        <div>&copy;2023 arslanshahab</div>
      </footer>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      > */}
      {/* <Toolbar> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
      {/* </Toolbar> */}
      {/* </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
          marginLeft: "-30px",
          // p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {/* <Home /> */}
        <Index />
        <About />
        <Skill />
        <Services />
        <Experience />
        <Project />
        <Client />
        <Contact />
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
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
