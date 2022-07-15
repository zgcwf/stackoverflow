import React from "react";

import technicalStyle from "./style.module.css";
import { tagList } from "../../common/local-data";

import Tags from "./Tags";

export default function QuestionTags() {
  return (
    <div className={technicalStyle.list}>
      {tagList &&
        tagList.map((item) => {
          return <Tags key={item.id} info={item} />;
        })}
    </div>
  );
}
