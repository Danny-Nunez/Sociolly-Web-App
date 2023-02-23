import LeftLink from "./LeftLink";
import "./style.css";
import { Link } from "react-router-dom";
import Expo from "./expo";

import { useState } from "react";
import Shortcut from "./Shortcut";
import React from "react";

export default function LeftHome({ user }) {
  const [visible] = useState(false);

  return (
    <div className="left_home scrollbar">
      <Link to="/profile" className="left_link hover2">
        <img src={user?.picture} alt="" />
        <span>
          {user?.first_name} {user.last_name}
        </span>
      </Link>

      <div className="splitter"></div>

      <div className="shortcut">
        <div className="heading">
          <Expo />
        </div>
      </div>

      <div className={`fb_copyright ${visible && "relative_fb_copyright"}`}>
        <Link to="/">Privacy </Link>
        <span>. </span>
        <Link to="/">Terms </Link>
        <span>. </span>
        <Link to="/">Advertising </Link>
        <span>. </span>
        <Link to="/">
          Ad Choices <i className="ad_choices_icon"></i>{" "}
        </Link>
        <span>. </span>
        <Link to="/"></Link>Cookies <span>. </span>
        <Link to="/">More </Link>
        <span>. </span> <br />© 2023
      </div>
    </div>
  );
}
