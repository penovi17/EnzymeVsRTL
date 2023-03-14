import React from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <Button onClick={decrement}> - </Button>
      <p>Count: {counter}</p>
      <Button onClick={increment}> + </Button>
    </div>
  );
}

export default App;
