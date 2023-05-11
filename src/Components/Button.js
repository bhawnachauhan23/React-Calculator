// This component represents a button that will be displayed on the calculator keypad.
// It takes in props including a clickHandler function, and a value to display on the button.
const Button = (props) => {
  return (
    // The button is an HTML input element of type "button" with an onClick event handler set to the clickHandler function.
    // It also has an id and value attribute equal to the value passed in through props.
    <input
      type="button"
      onClick={props.clickHandler}
      id={props.value}
      value={props.value}
    />
  );
};
// Export the Button component so it can be used in other parts of the application.
export default Button;
