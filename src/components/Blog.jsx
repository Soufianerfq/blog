import React from "react";
import { useParams } from "react-router-dom";
import blogs from "./data/data";
import Header from "./header";
import Footer from "./footer";

function Blog() {
  const { id } = useParams();

  const blog = blogs.find((obj) => obj.id === Number(id));

  return (
    <div className="">
      <Header />
      <div className="w-[90%] h-[150vh] ml-auto mr-auto ">
        <h1>Blog {blog.headline}</h1>
        <div className="">
          <img className="w-[50%] ml-auto mr-auto" src={blog.src} />
        </div>
        <div className="h-[auto] w-[20%] ml-auto mr-auto ">
          <p> {blog.article}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
