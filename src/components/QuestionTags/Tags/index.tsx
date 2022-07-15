import React from "react";
import { Tag, Popover } from "antd";

import tagStyle from "./style.module.css";

import TagsPopover from "../TagsPopover";

interface IProps {
  info: {
    id: string;
    title: string;
    watchers: string;
    questions: string;
    description: string;
  };
}

const Tags: React.FC<IProps> = (props) => {
  const { info } = props;

  return (
    <div className={tagStyle.list}>
      <Popover
        placement="bottom"
        content={<TagsPopover info={info} />}
        overlayClassName={tagStyle.pop}
      >
        <Tag color="blue" className={tagStyle.tag}>
          {info.title}
        </Tag>
      </Popover>
    </div>
  );
};
export default Tags;
