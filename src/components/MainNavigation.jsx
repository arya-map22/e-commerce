import { NavLink } from "react-router";

export default function MainNavigation() {
  return (
    <header className="mb-4 flex w-full items-center bg-dark-blue">
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
        <ul className="mx-4 flex justify-end gap-2 p-2 text-white">
          <li>Cart</li>
          <li>Log In</li>
        </ul>
      </nav>
    </header>
  );
}
