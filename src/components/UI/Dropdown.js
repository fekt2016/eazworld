import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";
import IconBxUserCircle from "./SvgIcon/IconUser";
import IconLogout from "./SvgIcon/Logout";
import IconSetting from './SvgIcon/IconSetting';

const Dropdown = () => {
  return (
    <ul className={classes.dropdown}>
      <li className={classes.item}>
        <IconBxUserCircle className={classes['dropdown-icon']}  height="25px" width="25px"/>
        <Link to='accountProfile'>profile</Link>
      </li>
      <li className={classes.item}>
        <IconSetting className={classes['dropdown-icon']} height="25px" width="25px"/>
        <Link>setting</Link>
      </li>
      <li className={classes.item}>
      <IconLogout className={classes['dropdown-icon']}  height="25px" width="25px"/>
        <Link to='/'>Logout</Link>
      </li>
    </ul>
  );
};

export default Dropdown;
