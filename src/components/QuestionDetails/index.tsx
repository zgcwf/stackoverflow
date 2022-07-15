import React from "react";

import questionStyle from "./style.module.css";

import Quote from "./Quote";

export default function QuestionDetails() {
  return (
    <div className={questionStyle.main}>
      <p>
        I created a new project using create-react-app and yarn 2 in vs code.
        The editor throws errors while importing every installed library like
        this:
      </p>
      <Quote />
      <p>
        The project compiles and runs successfully but the errors are still
        there. When I change the file's extension to .js and .jsx from.ts and
        .tsx, the errors disappear. How should I solve this problem for
        typescript files?
      </p>
    </div>
  );
}