// This component represents the output screen of the calculator, where the user's input and the resulting calculation are displayed.
// It takes in props including a value to display on the screen, which is passed in through the "value" prop.
const Output = (props) => {
  return (
    // The output screen is an HTML input element of type "text" with the "readOnly" attribute set to prevent user input.
    // The "value" attribute is set to the value passed in through props, which will display the current query or answer.
    <div>
      <input type="text" readOnly value={props.value} />
    </div>
  );
};

// Export the Output component so it can be used in other parts of the application.
export default Output;
