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
      <header className="mb-3 flex shadow-[0px_0px_19px_2px_rgba(51,_65,_85,_0.12)]">
        <Header />
      </header>
      <main className=" flex h-[auto] flex-col justify-center ">
        <div className="h-[70vh] w-[95%] ml-auto mr-auto shadow-[0px_0px_19px_2px_rgba(51,_65,_85,_0.12)] max-lg:hidden">
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
          <h1 className="ml-[110px] mb-7 text-4xl font-medium">All Blogs</h1>
        </div>
        <div className=" w-[95%] justify-center ml-auto mr-auto flex flex-wrap ">
          {blogs.map((obj) => (
            <Thumbnail {...obj} />
          ))}
        </div>
      </main>
      <footer className="h-[30vh] mt-5 shadow-[0px_0px_19px_2px_rgba(51,_65,_85,_0.12)]">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
