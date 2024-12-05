import "./comps.css";
import React from "react";
import { Link } from "react-router-dom";

function Thumbnail(props) {
  return (
    <Link
      to={`/blog/${props.id}`}
      className="w-[30%] max-lg:w-[45%] max-md:w-[95%]"
    >
      <div className="Thumbnail shadow-[0px_0px_19px_2px_rgba(51,_65,_85,_0.12)] ">
        <div>
          <img
            id="image"
            alt="cat"
            src={props.src}
            className=" w-[100%] h-[330px] mb-4"
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
