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
      <main className="pr-auto pl-auto flex h-[auto] flex-col w-[100%] justify-center ">
        <div className="h-[70vh] w-[85%] ml-auto mr-auto shadow-[0px_4px_8px_2px_rgba(234,_179,_8,_0.5)]">
          <Section />
        </div>
        <div className="w-[85%] ml-auto mr-auto flex mb-6">
          <div className="h-[65vh] inline-block mt-1 ">
            <TopPost />
          </div>
          <div className="inline-block mt-1 ">
            <Recent />
            <Recent />
          </div>
        </div>
        <div className="ml-auto mr-auto w-[85%]">
          <h1 className="ml-5 ">All Blogs</h1>
        </div>
        <div className="flex flex-wrap w-[85%] h-[100vh] ml-auto mr-auto  ">
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
