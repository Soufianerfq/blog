import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/data";
import Header from "../header";
import Footer from "../footer";
import Thumbnail from "../thumbnail";

function Blog() {
  const { id } = useParams();

  const blog = blogs.find((obj) => obj.id === Number(id));

  return (
    <div className="">
      <Header />
      <div className="w-[70%] h-[100vh] flex flex-row ml-auto mr-auto mt-5 max-lg:flex-col max-lg:w-[85%]">
        <div id="blogHeader" className="w-[32%] max-lg:w-[100%]">
          <div className="text-2xl font-black flex-1">
            <h1>Blog: {blog.headline}</h1>
          </div>
          <div className="text-[#6c6c6c]">
            <p>{blog.snippit}</p>
          </div>
          <div className="overflow-scroll h-[100vh] w-auto pr-[30px] shadow-[0px_0px_19px_2px_rgba(51,_65,_85,_0.12)] max-[1024px]:hidden max-[1561px]:w-[200px] ">
            {blogs.map((obj) => (
              <Thumbnail {...obj} />
            ))}
          </div>
        </div>
        <div id="blogContent" className="w-[50%] ml-auto mr-auto mt-3 ">
          <div className=" mb-1">
            <img className="" src={blog.src} />
          </div>
          <div
            className="h-[auto] p-2 shadow-[0px_0px_19px_2px_rgba(51,_65,_85,_0.12)] text-[#6c6c6c]
"
          >
            <p> {blog.article}</p>
          </div>
        </div>
      </div>
      <div className="h-[50vh]">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
