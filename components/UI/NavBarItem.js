import React from "react";

export const NavBarItem = (props) => {
  return (
    <li>
      <a href={props.href}>
        <span>{props.children}</span>
      </a>
    </li>
  );
};
