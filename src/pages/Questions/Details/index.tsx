import React from "react";

import detailsStyle from "./style.module.css";

import QuestionDetails from "../../../components/QuestionDetails";
import QuestionTags from "../../../components/QuestionTags";
import Info from "../../../components/Info";

export default function Details() {
  return (
    <div className={detailsStyle.details}>
      <QuestionDetails />
      <QuestionTags />
      <Info />
    </div>
  );
}
