import React from "react";
import { Tooltip } from "antd";
import { HistoryOutlined } from "@ant-design/icons";

import recordStyle from "./style.module.css";
import { tooltipInfo } from "../../common/antd-style";

export default function QuestionRecord() {
  return (
    <>
      <Tooltip placement="right" title={tooltipInfo} color="#fff">
        <a className={recordStyle.record} href="/#">
          <HistoryOutlined style={{ fontSize: "18px" }} />
        </a>
      </Tooltip>
    </>
  );
}
