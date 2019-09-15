import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  // static defaultProps = {
  //   tech: "Casa"
  // };

  state = {
    newTech: "",
    techs: []
  };

  componentDidMount() {
    const techs = localStorage.getItem("techs");
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  handleInputAdd = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        {/* <TechItem /> */}
        <input
          type="text"
          onChange={this.handleInputAdd}
          value={this.state.newTech}
        />
        <button type="submit">Insira aqui!</button>
      </form>
    );
  }
}

export default TechList;
