import react, { useState } from "react"; // importing React and useState hook from react package
import Button from "./Button"; // importing Button component from Button.js file
import Display from "./Display"; // importing Display component from Display.js file

// defining Calculator component
let Calculator = () => {
  // initializing state for query string and its setter using useState hook
  let [query, setQuery] = useState("");
  // initializing state for answer string and its setter using useState hook
  let [answer, setAnswer] = useState("");
  // defining an array of button values
  let arr = [
    "Delete",
    "CE",
    "/",
    "7",
    "8",
    "9",
    "%",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "+",
    "0",
    ".",
    "+/-",
    "Result",
  ];

  // defining click handler function for buttons
  let clickHandler = (e) => {
    // getting the value of clicked button
    let value = e.target.value;
    switch (
      value // switch case for different button values
    ) {
      case "Result": {
        // if button value is "Result"
        let result = "";
        try {
          // evaluating the query string using eval function
          result = eval(query); // storing the result in result variable
        } catch (err) {
          // if there is a math error, catching the error
          setAnswer("Math Error"); // setting answer state to "Math Error"
          break;
        }
        setQuery(result); // updating query state with the result
        setAnswer(result); // updating answer state with the result
        break;
      }
      case "%": {
        // if button value is "%"
        setQuery(query / 100); // updating query state by dividing it by 100
        break;
      }
      case "+/-": {
        // if button value is "+/-"
        setQuery(-1 * query); // updating query state by multiplying it by -1
        break;
      }
      case "CE": {
        // if button value is "CE"
        setQuery(""); // setting query state to empty string
        setAnswer(""); // setting answer state to empty string
        break;
      }
      case "Delete": {
        // if button value is "Delete"
        try {
          // removing the last character from query string using substring() function
          setQuery(query.substring(0, query.length - 1));
        } catch (err) {
          // if there is an error, setting both query and answer state to empty string
          setQuery("");
          setAnswer("");
          break;
        }
        break;
      }
      default: {
        // if button value is any other value
        setQuery((query += value)); // updating query state by concatenating the value to it
      }
    }
  };

  return (
    <>
      {/* main container */}
      <div className="container">
         {/* Display component with answer and query state as props */}
        <Display answer={answer} query={query} />{" "}
          {/* keypad container */}
        <div className="keypad">
           {arr.map(
            (
              item // mapping the array of button values to Button components with clickHandler function as prop
            ) => (
              <Button key={item} clickHandler={clickHandler} value={item} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Calculator; // exporting Calculator component as default export
