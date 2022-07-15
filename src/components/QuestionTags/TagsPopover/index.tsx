import React from "react";
import { Button } from "antd";
import {
  WifiOutlined,
  FireTwoTone,
  EyeOutlined,
  StopOutlined,
} from "@ant-design/icons";

import popoverStyle from "./style.module.css";

export interface IProps {
  info: {
    id: string;
    title: string;
    watchers: string;
    questions: string;
    description: string;
  };
}
const TagsPopover: React.FC<IProps> = (props) => {
  const { info } = props;

  return (
    <div>
      <div className={popoverStyle.statistics}>
        <span className={popoverStyle.fire}>
          <FireTwoTone twoToneColor="#ed852d" />
        </span>
        <span>{info.watchers} watchers</span>{" "}
        <span>{info.questions} questions</span>
        <span className={popoverStyle.signal}>
          <WifiOutlined style={{ color: "#ed852d" }} />
        </span>
      </div>
      <p>
        {info.description}
        <a href="/#">View tag</a>
      </p>
      <Button icon={<EyeOutlined />} className={popoverStyle.watch}>
        Watch Tag
      </Button>
      <Button icon={<StopOutlined />} className={popoverStyle.ignore}>
        Ignore Tag
      </Button>
    </div>
  );
};
export default TagsPopover;
