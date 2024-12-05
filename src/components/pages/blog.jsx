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
    <div className="w-full flex flex-col">
      <Header />
      <div className="flex flex-row max-lg:w-[100%] ">
        <div className="w-[30%] h-[100vh] ml-[30px] overflow-scroll max-lg:hidden">
          {blogs.map((obj) => (
            <Thumbnail {...obj} />
          ))}
        </div>
        <div className="w-[95%] max-lg:w-[100%] h-auto flex flex-col ml-auto mr-auto mt-5">
          <div id="blogContent" className="w-[80%] ml-auto mr-auto mt-3 ">
            <div className=" mb-1 w-[100%] relative">
              <img className="w-[100%]" src={blog.src} />
              <div
                id="blogHeader"
                className="w-[90%] mr-auto ml-auto absolute top-[10px] left-[10px]"
              >
                <div className="text-2xl font-black flex-1">
                  <h1>Blog: {blog.headline}</h1>
                </div>
                <div className="text-[#6c6c6c]">
                  <h2>{blog.writer}</h2>
                  <h2>{blog.date}</h2>
                </div>
              </div>
            </div>
            <div
              className="h-[auto] p-2 shadow-[0px_0px_19px_2px_rgba(51,_65,_85,_0.12)] text-[#6c6c6c]
"
            >
              <p> {blog.article}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
