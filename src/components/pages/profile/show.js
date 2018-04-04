import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';


class ShowPage extends Component {
  componentWillMount() {
    if (!this.props.user._id) {
      this.props.fetchUser();
    }
  }


  render() {
    if (!this.props.user._id) return null;
    const {firstName, lastName} = this.props.user;
    return (
      <div className="jumbotron jumbotron-fluid text-center" id="profile-jumbo">
          <h1>Welcome, {`${firstName} ${lastName}`}</h1>
          <div>Liked Photos</div>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, actions)(ShowPage);