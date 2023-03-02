import React, { FC } from "react";
import "./TitleMain.scss";

interface ITitleMain {
  text: string;
  location?: "center" | "left";
}

const TitleMain: FC<ITitleMain> = ({ text, location = "left" }) => {
  return <h2 style={{textAlign: location}} className="TitleMain" >{text}</h2>;
};

export default TitleMain;
