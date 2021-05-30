import { Avatar, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "../css/Register.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useHistory } from "react-router";

const Register = ({ setScreen }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
      height: theme.spacing(10),
      width: theme.spacing(10),
    },
  }));

  const classes = useStyles();

  const registerUser = () => {
    //register user
  };

  return (
    <div className="login__app">
      <div className="app__container">
        <div className="register">
          <Avatar
            className={classes.sizeAvatar}
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
          />
          <div className="input__username">
            <AccountCircleIcon style={{ fill: "#fff" }} />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input__useremail">
            <AccountCircleIcon style={{ fill: "#fff" }} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="input__userpassword">
            <VpnKeyIcon style={{ fill: "#fff" }} />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="button__containers">
            <button onClick={registerUser}>{loading ? "Loading..." : "Register"}</button>
            <p onClick={() => history.push("/login")}>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
