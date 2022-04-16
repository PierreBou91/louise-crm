import React from "react";
import Link from "next/link";

export const NavBarItem = (props) => {
  return (
    <li>
      <Link href={props.href}>
        <a>
          <span>{props.children}</span>
        </a>
      </Link>
    </li>
  );
};
