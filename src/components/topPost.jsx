import React from "react";
import image1 from "./data/media/image.jpg";
import "./comps.css";

function TopPost() {
  return (
    <a href="/" className="m-5">
      <div className="Thumbnail m-1 w-[650px]">
        <div>
          <img id="image" alt="cat" src={image1} className="w-[100%] mb-4" />
        </div>
        <div className="inline-block text-[#363636]">
          <h3 className="m-1 inline-block ">Name</h3>
          <h3 className="m-1 inline-block">date</h3>
        </div>
        <h1 className="headline font-bold m-1 mb-3">I am a TOP POST</h1>
        <div>
          <p className="m-1 mb-5 text-[#6c6c6c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </div>
        <div id="filters" className="w-[50%] space-x-4">
          <span>design</span>
          <span>home</span>
          <span>stuff</span>
        </div>
      </div>
    </a>
  );
}
export default TopPost;
