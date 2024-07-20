import React from "react";

const linkGen = element => <a href={`#${element}`} key={element}>{element}</a>

function NavBar() {
  const links = ["home", "about", "projects"];
  
  return <nav>{links.map(linkGen)}</nav>;
}

export default NavBar;
