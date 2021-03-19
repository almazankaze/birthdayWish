import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import CakeIcon from "../images/cake.png";
import Logout from "./Logout";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="home__logo">
          <img src={CakeIcon} alt="home" />
        </Link>

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="header__middle">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Groups" />
        <HeaderOption Icon={CalendarTodayIcon} title="Calender" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
      </div>

      <div className="header__right">
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="header__info">
          <Avatar src={user.photoURL} />
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
