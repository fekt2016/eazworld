import React from "react";
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import btc from "../../assest/btc.png";
import bch from "../../assest/bch.png";
import busd from '../../assest/busd.png'
import IconDashboard from '../UI/SvgIcon/IconDashboard';


const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
      <div className={classes.headbox}>
        <IconDashboard  width='25px' height='25px'/>
        <h1 className={classes.heading}>dashboard</h1>
      </div>
      <div className={classes.container}>
        <div className={classes.price}>
          <div className={classes.instock}>
            <h3 className={classes.subheading}>instock</h3>
          </div>
          <div className={classes.market}>
            <img src={btc} alt="btc" />
            <span>Market Rate</span>
          </div>
          <div>
            <div className={classes.rate}>
              <Link className={classes.buy}>buy</Link>
              <span>@ Ghc13.00</span>
            </div>

            <div className={classes.rate}>
              <Link className={classes.sell}>sell</Link>
              <span>@ Ghc12.00</span>
            </div>
          </div>
        </div>
        <div className={classes.price}>
          <div className={classes.instock}>
            <h3 className={classes.subheading}>instock</h3>
          </div>
          <div className={classes.market}>
            <img src={bch} alt="bch" />
            <span>Market Rate</span>
          </div>
          <div>
            <div className={classes.rate}>
              <Link className={classes.buy}>buy</Link>
              <span>@ Ghc13.00</span>
            </div>

            <div className={classes.rate}>
              <Link className={classes.sell}>sell</Link>
              <span>@ Ghc12.00</span>
            </div>
          </div>
        </div>
        <div className={classes.price}>
          <div className={classes.instock}>
            <h3 className={classes.subheading}>instock</h3>
          </div>
          <div className={classes.market}>
            <img src={busd} alt="busd" />
            <span>Market Rate</span>
          </div>
          <div>
            <div className={classes.rate}>
              <Link className={classes.buy}>buy</Link>
              <span>@ Ghc13.00</span>
            </div>

            <div className={classes.rate}>
              <Link className={classes.sell}>sell</Link>
              <span>@ Ghc12.00</span>
            </div>
          </div>
        </div>
        <div className={classes.price}>
        <div className={classes.instock}>
            <h3 className={classes.subheading}>instock</h3>
          </div>
          <div className={classes.market}>
            <img src={btc} alt="btc" />
            <span>Market Rate</span>
          </div>
          <div>
            <div className={classes.rate}>
              <Link className={classes.buy}>buy</Link>
              <span>@ Ghc13.00</span>
            </div>

            <div className={classes.rate}>
              <Link className={classes.sell}>sell</Link>
              <span>@ Ghc12.00</span>
            </div>
          </div>
        </div>
        <div className={classes.price}>
        <div className={classes.instock}>
            <h3 className={classes.subheading}>instock</h3>
          </div>
          <div className={classes.market}>
            <img src={btc} alt="btc" />
            <span>Market Rate</span>
          </div>
          <div>
            <div className={classes.rate}>
              <Link className={classes.buy}>buy</Link>
              <span>@ Ghc13.00</span>
            </div>

            <div className={classes.rate}>
              <Link className={classes.sell}>sell</Link>
              <span>@ Ghc12.00</span>
            </div>
          </div>
        </div>
        <div className={classes.price}>
        <div className={classes.instock}>
            <h3 className={classes.subheading}>instock</h3>
          </div>
          <div className={classes.market}>
            <img src={btc} alt="btc" />
            <span>Market Rate</span>
          </div>
          <div>
            <div className={classes.rate}>
              <Link className={classes.buy}>buy</Link>
              <span>@ Ghc13.00</span>
            </div>

            <div className={classes.rate}>
              <Link className={classes.sell}>sell</Link>
              <span>@ Ghc12.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
