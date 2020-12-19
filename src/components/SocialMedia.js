import React from "react";

import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import chat from "../images/chat.png";

export const SocialMedia = () => {
  return (
    <div>
      <nav className="socialmedia ">
        <a href="https://www.facebook.com/atlantisbyanet/">
          {" "}
          <img
            className=" menubar__socialmedia__icon"
            src={facebook}
            alt="icono facebook"
          />
        </a>
        <a href="https://www.instagram.com/atlantis_byanet/">
          <img
            className="menubar__socialmedia__icon"
            src={instagram}
            alt="icono instagram"
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=34*********">
          {" "}
          <img
            className="menubar__socialmedia__icon"
            src={chat}
            alt="icono whatsapp"
          />
        </a>
      </nav>
    </div>
  );
};
