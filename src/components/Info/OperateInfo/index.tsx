import React from "react";
import { Tooltip } from "antd";

import operateStyle from "./style.module.css";
import { tooltipInfo } from "../../../common/antd-style";

export default function OperateInfo() {
  return (
    <div className={operateStyle.operate}>
      <div>
        <a href="/#">Share</a>
        <div className={operateStyle.tips}>
          Short permalink to this question
        </div>
      </div>
      <div>
        <a href="/#">Edit</a>
        <div className={operateStyle.tips}>Revise and imporove this post</div>
      </div>
      <div>
        <Tooltip placement="bottom" title={tooltipInfo} color="#fff">
          <button>Following</button>
        </Tooltip>
      </div>
    </div>
  );
}
