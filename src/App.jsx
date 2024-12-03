import "./App.css";
import Header from "./components/header";
// import Footer from "./components/footer";
// import TopPost from "./components/topPost";
import Thumbnail from "./components/thumbnail";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>{/* <TopPost /> */}</div>
        <div className="flex flex-wrap">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
}

export default App;
