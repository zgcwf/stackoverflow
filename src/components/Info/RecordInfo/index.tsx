import React from "react";

import recordStyle from "./style.module.css";

export default function RecordInfo() {
  return (
    <div className={recordStyle.edit}>
      <a href="/#">
        <span className={recordStyle.edited}>edited</span>{" "}
        <span className={recordStyle.editedTime}>Nov 28, 2021 at 1:54</span>
      </a>
    </div>
  );
}
