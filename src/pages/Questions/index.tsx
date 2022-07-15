import React from "react";

import questionStyle from "./style.module.css";

import IconNavigation from "./IconNavigation";
import Details from "./Details";

export default function Questions() {
  return (
    <div className={questionStyle.questions}>
      <IconNavigation />
      <Details />
    </div>
  );
}
