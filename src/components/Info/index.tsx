import React from "react";

import infoStyle from "./style.module.css";

import OperateInfo from "./OperateInfo";
import RecordInfo from "./RecordInfo";
import UserInfo from "./UserInfo";

export default function Info() {
  return (
    <div className={infoStyle.info}>
      <OperateInfo />
      <RecordInfo />
      <UserInfo />
    </div>
  );
}
