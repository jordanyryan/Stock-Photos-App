import React, {Component} from 'react';
import axios from 'axios';
const ROOT_URL = "http://localhost:3090";

class ProfilePage extends Component {
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
    return (
      <div className="container">
          
      </div>
    )
  }
}



export default ProfilePage;