"use client";
import React from "react";
// import Link from "next/link";
import { Link } from "react-router-dom";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import styles from "./slideDownMenu.module.css";
import CallIcon from "@mui/icons-material/Call";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import HomeIcon from "@mui/icons-material/Home";
import './slideDownMenu.css';
import logo from "../../../src/components/image/logo-dark.png";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const SlideDownMenu = ({ menu, callback }) => {
  // const pathname = usePathname();
  return (
    <div className="menu">
      <div className="crossIcon">
        <div>
          <img src={logo} alt="food sply" />
        </div>
        <span onClick={() => callback && callback(false)}>x</span>
      </div>
      <div className="flex-1 flex flex-col mt-5">
        {/* { SIDEBAR_ITEMS?.map((item) => (
          <Link
            key={item.url}
            href={item.href}
            onClick={() => callback && callback(false)}
            className={`${menuLink} ${
              pathname == item.href? "text-primaryColor" : "text-secondaryColor"
            } `}
          >
            {item.title}
          </Link>
        ))} */}
         <List>
        {SIDEBAR_ITEMS.map((element) => (
          <a key={element.title} href={element.href} className="list_wrap">
            <ListItemButton>
              <ListItemIcon>
                <b style={{ color: "#FF4C60" }}>{element.icon}</b>
              </ListItemIcon>
              <ListItemText>
                <b style={{ color: "#454360" }}>{element.title}</b>
              </ListItemText>
            </ListItemButton>
          </a>
        ))}
      </List>
      </div>
    </div>
  );
};

export default SlideDownMenu;

const SIDEBAR_ITEMS = [
  {
    title: "Home",
    href: "#home",
    icon: <HomeIcon />,
  },

  {
    title: "About",
    href: "#about",
    icon: <PermIdentityIcon />,
  },
  {
    title: "Services",
    href: "#services",
    icon: <MedicalInformationIcon />,
  },
  {
    title: "Experience",
    href: "#experience",
    icon: <SchoolIcon />,
  },
  {
    title: "Work",
    href: "#work",
    icon: <WorkIcon />,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <CallIcon />,
  },
];