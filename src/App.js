import logo from "./logo.svg";
import "./App.css";
import { AppBar, Carousel, Sale, File, NewsLetter,Footer } from "./Components";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "rsuite/dist/styles/rsuite-default.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <hr />
      <Carousel />
      <hr />
      <Sale />
      <hr />
      <File />
      <hr />
      <NewsLetter />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
