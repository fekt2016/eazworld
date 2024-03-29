import React from "react";
import { Form, NavLink } from "react-router-dom";
import classes from "./SideNav.module.css";
import IconDashboard from "../UI/SvgIcon/IconDashboard";
import IconBuy from "../UI/SvgIcon/IconBuy";
import IconSell from "../UI/SvgIcon/IconSell";
import IconManageOrder from "../UI/SvgIcon/IconManageOrder";
import IconManagePayment from "../UI/SvgIcon/IconManagePayment";
import IconSetting from "../UI/SvgIcon/IconSetting";
import IconLogout from "../UI/SvgIcon/Logout";
import logo from "../../assest/logo100.png";
const SideNav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.imgbox}>
        <img src={logo} alt="sidelogo" />
        <h1 className={classes.heading}>eazworld</h1>
      </div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            <IconDashboard
              className={classes.icon}
              color="#f2a900"
              height="30px"
              width="30px"
            />{" "}
            Dashboard
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="buy"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <IconBuy
              className={classes.icon}
              color="#f2a900"
              height="30px"
              width="30px"
            />{" "}
            buy
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="sell"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <IconSell
              className={classes.icon}
              color="#f2a900"
              height="30px"
              width="30px"
            />
            sell
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="managepayment"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <IconManagePayment
              className={classes.icon}
              color="#f2a900"
              height="30px"
              width="30px"
            />{" "}
            manage payment
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="ManageOrder"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <IconManageOrder
              className={classes.icon}
              color="#f2a900"
              height="30px"
              width="30px"
            />{" "}
            manage order
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="accountProfile"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <IconSetting
              className={classes.icon}
              color="#f2a900"
              height="30px"
              width="30px"
            />{" "}
            setting
          </NavLink>
        </li>
        <li className={classes.item}>
          <Form action="logout" method="Post">
            <button className={classes.logout}>
              <IconLogout
                className={classes.logout}
                height="30px"
                width="30px"
              />
              logout
            </button>
          </Form>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
