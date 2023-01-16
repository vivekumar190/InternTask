import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <div className="wrapper">
      <img src="/images/logo.svg"></img>
      <div className="container d-flex justify-content-center">
        <Form />
      </div>
      <div className="termandcondition">Terms of use | Privacy policy </div>
    </div>
  );
}

export default App;
