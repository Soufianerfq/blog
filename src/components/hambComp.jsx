import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

function HambComp() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen  text-black bg-white dark:bg-900">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <div
            id="header"
            className="flex flex-col-reverse p-3 justify-center  ml-auto"
          >
            <button className="button max-lg:text-xl">Get Started</button>
            <div className=" flex flex-col items-center justify-center">
              <a>Product</a>
              <a>Solution</a>
              <a>Pricing</a>
              <a>Rresources</a>
              <a>Company</a>
              <a>Careers</a>
              <a>Home</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HambComp;
