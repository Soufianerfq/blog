import React from "react";
import HambComp from "./hambComp";

function Header() {
  return (
    <header className="header w-[100%] flex ">
      <div className="hidden max-md:block">
        <HambComp />
      </div>
      <div
        id="header"
        className="flex flex-row-reverse p-3 max-md:hidden ml-auto"
      >
        <button className="button max-lg:text-xl">Get Started</button>
        <a>Product</a>
        <a>Solution</a>
        <a>Pricing</a>
        <a>Rresources</a>
        <a>Company</a>
        <a>Careers</a>
        <a>Home</a>
      </div>
    </header>
  );
}

export default Header;
