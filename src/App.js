import CounterComponent from "./CounterComponent";
import React, {useState, useEffect} from 'react';
import BasicCard from "./Cards";

function App(props) {
  const [counter, setCounter] = React.useState(5);
  const [render, setRender] = React.useState(true);

  useEffect(() => {
    console.log("Mounting Phase of Functional Component")
  }, []);

  useEffect(() => {
    console.log("Mounting and Updating phase for counter state variable")
  }, [counter]);

  useEffect(() => {
    console.log("Mounting and Updating phase for render state variable")
  }, [render]);

  const handleDecrement = () => {
    setCounter(counter - 1)
  }
  const handleReset = (value) => {
    setCounter(value)
  }

  const toggleComponent = (bool) => {
    setRender(bool)
  }

  return (
    <>
      <div style={{ color: props.colour, padding: '10px', margin: '2%' }}>
        
        <h4 >
          This is the {props.componentName}
        </h4>

        Initial Value : {counter} <br/> <br/>

        <button onClick={ () => setCounter(counter + 1) }> Increment </button> &nbsp;
        <button onClick={handleDecrement} > Decrement </button>&nbsp;
        <button onClick={() => handleReset(5)}> Reset </button> <br/> <br/>
        <button onClick={() => toggleComponent(!render)}> Toggle Component </button>

        <BasicCard subheading="Counter Application" heading="Functional Component" 
        description="This Component is having Increment and Decrement button and using useState react hooks"
        functionalities="handleIncrement, handleDecrement, handleReset funciton are available" 
        toggleComponent={(renderChild) => toggleComponent(renderChild)} />

        {render ? <CounterComponent componentName="Class Component" counterProps = {counter}/> : <> </>} 

      </div>
    </>
  )
}

export default App;