import "./App.css";
import { Form } from "./components/form/Form";
import { Container } from "./components/tableContainer/Container";

const App = () => {
  return (
    <div className="container">
      <h1>Counter App</h1>
      <hr />
      <Container />
      <Form />
    </div>
  );
};

export default App;
