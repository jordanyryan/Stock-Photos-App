import React, {Component} from 'react';
import axios from 'axios';

class ShowPage extends Component {

  render() {
    if (!this.state.firstName) return null;
    return (
      <div className="jumbotron jumbotron-fluid text-center" id="profile-jumbo">
          <h1>{`${this.state.firstName} ${this.state.lastName}`}</h1>
          <div>Followers</div>
          <div>Following</div>
          <div>Collections</div>
          <div>Liked Photos</div>
      </div>
    )
  }
}



export default ShowPage;