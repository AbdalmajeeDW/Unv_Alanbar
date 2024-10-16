import { AppBar, IconButton } from "@mui/material";
import { BsListUl } from "react-icons/bs";
import MainLogo from "../MainLogo.png";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import links from "../Common/Links";
import { CiLogout } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="navLink" onClick={toggleDrawer(false)}>
      <ul>
        {links.map((text, index) => (
          <li key={index}>
            <Link className="titleLink" to={text.url}>
              <div className="icon">{text.icon}</div>

              <div className="title">{text.titleLink}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <AppBar position="static" className="navBar">
        <div className="container">
          <div className="IconNav">
            <BsListUl onClick={toggleDrawer(true)} />
            <Tooltip title="تسجيل الخروج">
              <Link to="/login">
                <IconButton>
                  <CiLogout className="logout"/>
                </IconButton>
              </Link>
            </Tooltip>
          </div>

          <div className="logo">
            <img src={MainLogo} alt="logo" width={62} height={77} />
          </div>
        </div>
      </AppBar>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}
