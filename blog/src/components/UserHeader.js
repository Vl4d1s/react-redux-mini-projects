import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const user = this.props.user;
    if (!user) return <div>Loading...</div>;
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // mapStateToProps gets a secound argument as well. a reference to the props
  // of the main component
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
