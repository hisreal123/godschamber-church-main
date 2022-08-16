import React from "react";
import { NavProps } from "./NavProps";

const ListItems = (props: NavProps) => {
  return (
    <div className=" ">
      <a href={props.url} key={props.item} className={props.CustomStyle}>
        {props.item}
      </a>
    </div>
  );
};

export default ListItems;
