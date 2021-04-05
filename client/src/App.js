import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Subscribers from "./component/Subscribers";
import Carroussel from "./component/Carroussel/Carroussel";
import AboutUs1 from "./component/AboutUs/AboutUs1";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
<link rel="preconnect" href="https://fonts.gstatic.com" />;
<link
  href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap"
  rel="stylesheet"
/>;

function App() {
  return (
    <div className="App">
      <div id="top">
        <NavBar />
        <Carroussel />
        <AboutUs1 />
      </div>
    </div>
  );
}

export default App;
