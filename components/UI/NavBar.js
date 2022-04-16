import React from "react";
import { NavBarItem } from "./NavBarItem";

import classes from "../../styles/Header.module.css";
import Link from "next/link";

const NavBarItems = [
  { title: "Utilisateurs", href: "/" },
  { title: "Page personnelle", href: "/" },
  { title: "Contacts", href: "/" },
  { title: "Organisations", href: "/" },
  { title: "Actions", href: "/" },
  { title: "Modeles", href: "/" },
];

export const NavBar = () => {
  return (
    <nav>
      <ul className={classes.header}>
        <li>
          <h1>
            <Link href="/">
              <a>
                louise-crm<span>.com</span>
              </a>
            </Link>
          </h1>
        </li>
        {NavBarItems.map((item) => (
          <NavBarItem href={item.href}>{item.title}</NavBarItem>
        ))}
      </ul>
    </nav>
  );
};
