import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import Navi from './navi';
import SearchBar from './searchbar';

class MainJumbo extends Component {
  render() {
    return (
      <Jumbotron className="p-0 m-0"  id="main-jumbo" fluid>
        <Navi history={this.props.history}/>
        <SearchBar />
      </Jumbotron>
    )
  }
}

export default MainJumbo;