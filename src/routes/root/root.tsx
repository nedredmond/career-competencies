import { Outlet } from "reactrouter";
import { Nav } from "./nav";
import { Header } from "./header";

export const Root = () => (
  <>
    <Header />
    <Outlet />
    <Nav />
  </>
);
