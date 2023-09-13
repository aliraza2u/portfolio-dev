import React from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
const Navbar = () => {
  return (
    <div className="right-nav">
      <div className="logo">
        <img src="/img/logo-2.png" alt="Not available" />
      </div>
      <nav>
        <div className="icons">
          <HomeIcon />
          <PermIdentityIcon />
          <MedicalInformationIcon />
          <SchoolIcon />
          <WorkIcon />
          <CallIcon />
        </div>
        <ul>
          <a href="">
            <li>
              <b>Home</b>
            </li>
          </a>

          <a href="">
            <li>
              <b>About</b>
            </li>
          </a>

          <a href="">
            <li>
              <b>Services</b>
            </li>
          </a>

          <a href="">
            <li>
              <b>Experiences</b>
            </li>
          </a>

          <a href="">
            <li>
              <b>Works</b>
            </li>
          </a>

          <a href="">
            <li>
              <b>Contact</b>
            </li>
          </a>
        </ul>
      </nav>
      <footer className="footer">
        <p>&copy;2023 arslanshahab</p>
      </footer>
    </div>
  );
};

export default Navbar;
