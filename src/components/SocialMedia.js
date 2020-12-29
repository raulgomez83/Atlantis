import React from "react";

import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import chat from "../images/chat.svg";

export const SocialMedia = () => {
  return (
    <div>
      <nav className="socialmedia ">
        <a
          href="https://www.facebook.com/atlantisbyanet/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            className=" menubar__socialmedia__icon"
            src={facebook}
            alt="icono facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/atlantis_byanet/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="menubar__socialmedia__icon"
            src={instagram}
            alt="icono instagram"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=34698144909"
          target="_blank"
          rel="noreferrer"
        >
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
