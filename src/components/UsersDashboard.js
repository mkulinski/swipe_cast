import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyUser, addUser } from '../actions/userActions';
import styles from '../stylesheets/mainStyle';

class UsersDashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props.store);
  }

  render() {
    return (
      <div style={styles.text}>
        <h1>UsersDashboard</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => store;

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: userInfo => dispatch(addUser(userInfo)),
    verifyUser: userInfo => dispatch(verifyUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersDashboard);
