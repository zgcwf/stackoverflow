import React from "react";
import { Tooltip } from "antd";
import { BookOutlined } from "@ant-design/icons";

import markStyle from "./style.module.css";
import { tooltipInfo } from "../../common/antd-style";

export default function QuestionMark() {
  return (
    <>
      <Tooltip placement="right" title={tooltipInfo} color="#fff">
        <button className={markStyle.mark}>
          <div>
            <BookOutlined style={{ fontSize: "18px" }} />
          </div>
          <div className={markStyle.markNumber}>5</div>
        </button>
      </Tooltip>
    </>
  );
}
