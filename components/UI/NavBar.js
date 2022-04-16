import React from "react";
import { NavBarItem } from "./NavBarItem";

import classes from "../../styles/Navbar.module.css";
import Link from "next/link";

const NavBarItems = [
  { title: "Utilisateurs", href: "/users" },
  { title: "Page personnelle", href: "/myactions" },
  { title: "Contacts", href: "/contacts" },
  { title: "Organisations", href: "/orgs" },
  { title: "Actions", href: "/actions" },
  { title: "Modeles", href: "/models" },
];

export const NavBar = () => {
  return (
    <nav>
      <ul className={classes.navlist}>
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
          <NavBarItem key={item.title} href={item.href}>
            {item.title}
          </NavBarItem>
        ))}
      </ul>
    </nav>
  );
};
