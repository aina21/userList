import React, { Component } from "react";
import * as API from "../api";
import { Link } from "react-router-dom";

export default class Users extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const users = await API.getUser();
    this.setState({ users });
  }
  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <Link key={user.id} to={"/user/" + user.id}>
            <li key={user.id}>{user.name}</li>
          </Link>
        ))}
      </ul>
    );
  }
}
