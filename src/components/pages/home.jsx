import React from "react";
import Footer from "../footer";
import Header from "../header";
import Thumbnail from "../thumbnail";
import Recent from "../recent";
import TopPost from "../topPost";
import blogs from "../data/data";
import Section from "../section";

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className=" flex h-[auto] flex-col justify-center ">
        <div className="h-[70vh] w-[95%] ml-auto mr-auto shadow-[0px_4px_8px_2px_rgba(234,_179,_8,_0.5)] max-lg:hidden">
          <Section />
        </div>
        <div className="w-[85%] ml-auto mr-auto flex mb-6 max-lg:w-[95%]">
          <div className=" inline-block mt-1 ">
            <TopPost />
          </div>
          <div className="inline-block mt-1 max-lg:hidden">
            <Recent />
            <Recent />
          </div>
        </div>
        <div className="w-[100%]">
          <h1 className="ml-5 ">All Blogs</h1>
        </div>
        <div className=" w-[95%] justify-center ml-auto mr-auto flex flex-wrap ">
          {blogs.map((obj) => (
            <Thumbnail {...obj} />
          ))}
        </div>
      </main>
      <footer className="h-[50vh]">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
