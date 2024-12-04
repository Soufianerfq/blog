import "./comps.css";
import React from "react";
import { Link } from "react-router-dom";

function Thumbnail(props) {
  return (
    <Link to={`/blog/${props.id}`} className=" m-5">
      <div className="Thumbnail w-[550px]">
        <div>
          <img
            id="image"
            alt="cat"
            src={props.src}
            className="w-[550px] h-[360px] mb-4"
          />
        </div>
        <div className="inline-block text-[#363636]">
          <h3 className="m-1 inline-block ">{props.writer}</h3>
          <h3 className="m-1 inline-block">{props.date}</h3>
        </div>
        <h1 className="headline font-bold m-1 mb-3">{props.headline}</h1>
        <div>
          <p className="m-1 mb-5 text-[#6c6c6c]">{props.snippit}</p>
        </div>
        <div id="filters" className="w-[50%] space-x-4">
          <span>design</span>
          <span>home</span>
          <span>stuff</span>
        </div>
      </div>
    </Link>
  );
}
export default Thumbnail;
