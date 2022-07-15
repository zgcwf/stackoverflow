import React from "react";

import navStyle from "./style.module.css";

import QuestionVote from "../../../components/QuestionVote";
import QuestionMark from "../../../components/QuestionMark";
import QuestionRecord from "../../../components/QuestionRecord";

export default function IconNavigation() {
  return (
    <div className={navStyle.navlist}>
      <QuestionVote />
      <QuestionMark />
      <QuestionRecord />
    </div>
  );
}
