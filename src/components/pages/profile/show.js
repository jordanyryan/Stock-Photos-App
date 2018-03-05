import React, {Component} from 'react';
import axios from 'axios';
import Navi from '../../navi';
const ROOT_URL = "http://localhost:3090";

class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userId,
      firstName: "",
      lastName: ""
    }
  }
  componentWillMount() {
    axios.get(`${ROOT_URL}/users/${this.props.match.params.userId}`)
    .then(({data}) => {
      this.setState({firstName: data.firstName, lastName: data.lastName});
    })
    .catch(err => {
      console.log(err);
    })
  }

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