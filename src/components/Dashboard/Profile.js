import React, { useState } from "react";
import classes from "./Profile.module.css";
import IconUserpro from "../UI/SvgIcon/IconUserPro";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Profile = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={classes.profile}>
      <div className={classes.tabs}>
        <div
          className={
            toggleState === 1
              ? `${classes.tab} ${classes["active-tab"]}`
              : `${classes.tab}`
          }
          onClick={() => toggleTab(1)}
        >
          account
        </div>
        <div
          className={
            toggleState === 2
              ? `${classes.tab} ${classes["active-tab"]}`
              : `${classes.tab}`
          }
          onClick={() => toggleTab(2)}
        >
          change password
        </div>
        <div
          className={
            toggleState === 3
              ? `${classes.tab} ${classes["active-tab"]}`
              : `${classes.tab}`
          }
          onClick={() => toggleTab(3)}
        >
          security
        </div>
        <div
          className={
            toggleState === 4
              ? `${classes.tab} ${classes["active-tab"]}`
              : `${classes.tab}`
          }
          onClick={() => toggleTab(4)}
        >
          verification
        </div>
        <div
          className={
            toggleState === 5
              ? `${classes.tab} ${classes["active-tab"]}`
              : `${classes.tab}`
          }
          onClick={() => toggleTab(5)}
        >
          addresses
        </div>
      </div>
      <div className={classes.tabContent}>
        <div
          className={
            toggleState === 1
              ? `${classes.content} ${classes["active-content"]}`
              : `${classes.content}`
          }
        >
          <div className={classes.user}>
            <div className={classes.userForm}>
              <form className={classes.form}>
                <h3>Update Account Name For ID Verification</h3>
                <Input
                  className={classes.group}
                  label="first Name"
                  type="text"
                />
                <Input
                  className={classes.group}
                  label="last Name"
                  type="text"
                />
                <Button className={classes.btn}>save</Button>
              </form>

              <form className={classes.form}>
                <h3>Update phone number For ID Verification</h3>
                <Input
                  className={classes.group}
                  label="phone number"
                  type="number"
                />
                <Button className={classes.btn}>save</Button>
              </form>

              <form className={classes.form}>
                <h3>Update Profile Picture: Square Size Image Recommended</h3>
                <Input
                  className={classes.group}
                  label="profile pic"
                  type="file"
                />
                <Button className={classes.btn}>save</Button>
              </form>
              <div className={classes.notification}>
                <h2> Notification</h2>

                <form>
                  <h4>Sms me when: </h4>
                  <Input
                    type="checkbox"
                    label="i send or receive digital curre"
                  />
                  <Input
                    type="checkbox"
                    label="i buy or sell digital currency"
                  />
                  <Input
                    type="checkbox"
                    label="there are recommended action for my account"
                  />

                  <h4> Email me when:</h4>
                  <Input
                    type="checkbox"
                    label="i send or receive digital curre"
                  />
                  <Input
                    type="checkbox"
                    label="i send or receive digital curre"
                  />
                  <Input
                    type="checkbox"
                    label="i send or receive digital curre"
                  />
                  <Button type="submit" className={classes.btn}>
                    save
                  </Button>
                </form>
              </div>
            </div>
            <div className={classes["user-detail"]}>
              <div className={classes.userImg}>
                <IconUserpro
                  className={classes.iconuser}
                  height="50px"
                  width="50px"
                />
              </div>
              <div className={classes["user-info"]}>
                <div>
                  <span>name:</span> <span>Yussif faisal</span>
                </div>
                <div>
                  <span>email:</span> <span>fekt2016@icloud.com</span>
                </div>
                <div>
                  <span>phone:</span> <span>0244388190</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            toggleState === 2
              ? `${classes.content} ${classes["active-content"]}`
              : `${classes.content}`
          }
        >
          <div className={classes.change}>
            <form className={`${classes.form} ${classes.password}`}>
              <Input
                className={classes.group}
                label="old password"
                type="password"
              />
              <Input
                className={classes.group}
                label="new password"
                type="password"
              />
              <Input
                className={classes.group}
                label="confirm password"
                type="password"
              />
              <Button type="submit" className={classes.btn}>
                change password
              </Button>
            </form>
          </div>
        </div>
        <div
          className={
            toggleState === 3
              ? `${classes.content} ${classes["active-content"]}`
              : `${classes.content}`
          }
        >
          <form className={`${classes.form} ${classes.security}`}>
            {/* <div className={classes.security}> */}
            <button type="button" className={classes["security-btn"]}>
              <span>disable 2factor</span>
              <p>
                By selecting this no need to enter a token at the time of
                logging in to your account
              </p>
            </button>
            <button type="button" className={classes["security-btn"]}>
              <span>google authenticator</span>
              <p>You need to enter a token via an app</p>
            </button>
            <button type="button" className={classes["security-btn"]}>
              <span>Email authenticator</span>
              <p>you need to enter a token sent via email</p>
            </button>
            {/* </div> */}
          </form>
        </div>
        <div
          className={
            toggleState === 4
              ? `${classes.content} ${classes["active-content"]}`
              : `${classes.content}`
          }
        >
          <div className={classes.verify}>
            <Input label="Select Valid National ID" type="file" id="national" />
            <Input
              label="Select Selfie With National ID"
              type="file"
              id="nationalselfie"
            />
            <Input
              label="Select Selfie Paper Verification"
              type="file"
              id="paper"
            />
            <Button type="submit" className={classes.btn}>
              submit verification document
            </Button>
          </div>
        </div>
        <div
          className={
            toggleState === 5
              ? `${classes.content} ${classes["active-content"]}`
              : `${classes.content}`
          }
        >
          <div className={classes.address}>
            <h4>all btc wallet address of user</h4>
            <table className={classes.table}>
              <thead className={classes.thead}>
                <tr>
                  <th>id</th>
                  <th>date</th>
                  <th>wallet addres</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>w1</td>
                  <td>6th march 2023</td>
                  <td>bc1q797m68y5836d0se7tydzwsndqmtgkmjhkwje4q</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
