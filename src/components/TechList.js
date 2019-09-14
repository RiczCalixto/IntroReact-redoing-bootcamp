import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "React.js", "React Native"]
  };
  render() {
    console.log(this.state);
    return (
      <>
        <ul>
          {this.state.techs.map(s => (
            <li>{s}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default TechList;
