import { Outlet } from "react-router";

import MainNavigation from "../components/MainNavigation";

export default function PageLayout() {
  return (
    <>
      <MainNavigation />
      <main className="flex flex-col items-center">
        <Outlet />
      </main>
    </>
  );
}
