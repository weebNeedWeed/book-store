import React from "react";
import NavBarPresentation from "./NavBar.presentation";
import useScrollStatus from "./../../helpers/hooks/useScrollStatus.hook";

function NavBar() {
  const scrollStatus = useScrollStatus();

  return <NavBarPresentation scrollStatus={scrollStatus} />;
}

export default NavBar;
