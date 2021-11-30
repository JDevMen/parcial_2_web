import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import logo from "./images/video-camera.png";

function App() {
  return (
    <div className="App">
      <Navbar bg="info" variant="light">
        <Navbar.Brand>
          <img src={logo} alt="movie camera icon" />
          Movies
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
