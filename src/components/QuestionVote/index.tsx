import React from "react";
import { Tooltip } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

import voteStyle from "./style.module.css";
import { tooltipInfo } from "../../common/antd-style";

export default function QuestionVote() {
  return (
    <>
      <Tooltip placement="right" title={tooltipInfo} color="#fff">
        <button className={voteStyle.triangleTop}>
          <CaretUpOutlined style={{ fontSize: "18px" }} />
        </button>
      </Tooltip>
      <div className={voteStyle.vote}>43</div>
      <Tooltip placement="right" title={tooltipInfo} color="#fff">
        <button className={voteStyle.triangleBottom}>
          <CaretDownOutlined style={{ fontSize: "18px" }} />
        </button>
      </Tooltip>
    </>
  );
}
