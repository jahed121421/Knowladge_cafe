import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <ToastContainer />
    </div>
  );
}

export default App;
