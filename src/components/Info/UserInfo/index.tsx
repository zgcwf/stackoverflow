import React from "react";

import userStyle from "./style.module.css";

export default function UserInfo() {
  return (
    <div className={userStyle.user}>
      <div className={userStyle.userTime}>
        asked <span>Nov , 2020 at 21:28</span>
      </div>
      <div className={userStyle.userAvatar}>
        <a href="/#">
          {" "}
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Ggx_8sNZ_vs9cQvxvS54fyHKFlDBdtXS5v33d3O=k-s64"
            alt="头像"
          />
        </a>
      </div>
      <div className={userStyle.userDetails}>
        <a href="/#">Amir Fakhim Babaei</a>
        <div className="flair">
          <span className={userStyle.score}>493</span>
          <span className={userStyle.badge}>
            <span className={userStyle.goldBadge}></span>
            <span className={userStyle.badgeCount}>1</span>
          </span>
          <span className={userStyle.badge}>
            <span className={userStyle.silverBadge}></span>
            <span className={userStyle.badgeCount}>4</span>
          </span>
          <span className={userStyle.badge}>
            <span className={userStyle.bronzeBadge}></span>
            <span className={userStyle.badgeCount}>12</span>
          </span>
        </div>
      </div>
    </div>
  );
}
