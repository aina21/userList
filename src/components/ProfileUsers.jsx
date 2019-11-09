import React, { Component } from "react";
import * as API from "../api";

export default class ProfileUsers extends Component {
  state = {
    name: "",
    username: "",
    email: ""
  };
  async componentDidMount() {
    const { id } = this.props;
    const data = await API.getUserProfile(id);
    this.setState({
      name: data.name,
      username: data.username,
      email: data.email
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.username}</p>
        <p>{this.state.email}</p>
      </div>
    );
  }
}
