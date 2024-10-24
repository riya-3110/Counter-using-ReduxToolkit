import { useSelector } from "react-redux";
import "./App.css";
import { Container } from "./components/Container";
import { Controls } from "./components/Controls";
import { DisplayCounter } from "./components/DisplayCounter";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrivacyMsg } from "./components/PrivacyMsg";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <div className="App">
      <h1>React + Redux ToolKit</h1>
      <Container>
        <div className=" py-5 my-5 text-center">
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMsg /> : <DisplayCounter />}
            <Controls />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
