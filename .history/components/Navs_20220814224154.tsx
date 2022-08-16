import React from "react";
import ListItems from "./ListItems";
import { NavProps } from "./NavProps";

const Nav = (props: NavProps) => {
  return (
    <nav className="">
      <ListItems
        url={props.url}
        item={props.item}
        CustomStyle={props.CustomStyle}
      />
    </nav>
  );
};

export default Nav;

// TODO: Passed the  Listitem into this Parent component and passed same to Header Component ,since we could reuse the ListItem component in the Footer also
