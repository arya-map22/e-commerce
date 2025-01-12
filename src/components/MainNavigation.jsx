import { NavLink } from "react-router";

import CartIcon from "./CartIcon";

export default function MainNavigation() {
  return (
    <header className="sticky top-0 mb-4 flex w-full items-center bg-dark-blue text-xl">
      <nav className="w-1/2">
        <ul className="mx-4 flex gap-2 p-2 text-white">
          <li>
            <NavLink
              className="hover:text-beige active:relative active:top-0.5"
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="w-1/2">
        <ul className="mx-4 flex items-center justify-end gap-2 p-2 text-white">
          <li>Log In</li>
          <CartIcon />
        </ul>
      </nav>
    </header>
  );
}
