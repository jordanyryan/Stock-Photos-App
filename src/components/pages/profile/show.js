import React, {Component} from 'react';
import PhotoGallery from '../../gallery';
import {connect} from 'react-redux';
import * as actions from '../../../actions';
import Navi from '../../navi';
import avatar from '../../../img/avatar_placeholder.png';


class ShowPage extends Component {
  componentWillMount() {
    if (!this.props.user._id) {
      localStorage.getItem('token') ? this.props.fetchUser() : this.props.history.push('/');
    }
  }

  render() {
    if (!this.props.user._id) return null;
    const {firstName, lastName} = this.props.user;
    return (
      <div className="container-fluid p-0 m-0">
        <div className="jumbotron jumbotron-fluid text-center bg-dark m-0 p-0" id="profile-jumbo">
        <Navi textColor={"dark"} navColor={"light"}/>
          <h1>{`${firstName} ${lastName}`}</h1>
          <img className="avatar mb-3" src={avatar} alt="blank_avatar"/>
        </div>
        <PhotoGallery photos={this.props.user.likedPhotos} header={"Liked Photos"}/>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, actions)(ShowPage);