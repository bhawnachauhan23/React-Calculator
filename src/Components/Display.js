// Importing the "Output" component from the "./Output.js" file.
const { default: Output } = require("./Output");

// Defining a new component called "Display" that takes in two props, "query" and "answer".
const Display = (props) => {
  // The component renders two instances of the "Output" component, each with a "value" prop set to "query" and "answer", respectively.
  return (
    <div>
      <Output value={props.query} />
      <Output value={props.answer} />
    </div>
  );
};

// Exporting the "Display" component.
export default Display;
