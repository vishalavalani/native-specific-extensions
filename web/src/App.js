import React from "react";
import { Button } from "route-design-system";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    console.log("local", process.env.REACT_APP_ENVIRONMENT);
  }
  _onClick = () => {
    alert("I am being hit! Please save me..");
  };
  render() {
    return (
      <div className="App">
        <Button title="Hit Me!" onClick={this._onClick} />
      </div>
    );
  }
}

export default App;
