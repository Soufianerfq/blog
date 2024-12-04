import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TopPost from "./components/topPost";
import Thumbnail from "./components/thumbnail";
import Recent from "./components/recent";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex h-[200vh] flex-col w-[100%] justify-center ">
        <div className="w-[80%] ml-5 flex mb-6">
          <div className="h-[65vh] inline-block ">
            <TopPost />
          </div>
          <div className="inline-block">
            <Recent />
            <Recent />
          </div>
        </div>
        <h1 className="ml-5">All Blogs</h1>
        <div className="flex flex-wrap w-[100%] h-[1000vh] ">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </main>
      <footer className="h-[50vh]">
        <Footer />
      </footer>
    </>
  );
}

export default App;
