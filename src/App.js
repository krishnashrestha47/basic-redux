import { useState } from "react";
import "./App.css";
import { Form } from "./components/form/Form";
import { Container } from "./components/tableContainer/Container";

const App = () => {
  const [count, setCount] = useState(100);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <hr />
      <Container count={count} />
      <Form increaseCount={increaseCount} />
    </div>
  );
};

export default App;
