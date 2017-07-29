import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../../images/logo.svg';
import {getUsers} from '../../redux/about';

const mapStateToProps = (state) => ({
  users: state.about.users || []
})

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <hr />
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink activeClassName="btn-primary" className="btn btn-default" to={'/home'}> Home </NavLink>
          &nbsp;&nbsp;
          <NavLink activeClassName="btn-primary" className="btn btn-default" to={'/counter'}> Counter </NavLink>
          &nbsp;&nbsp;
          <NavLink activeClassName="btn-primary" className="btn btn-default" to={'/about'}> About </NavLink>
          <hr />
        </div>
        <div className="row">
        { this.props.users.map((user, i) => (
              <div className="col-lg-4 col-sm-6" key={i}>
                <div className="card hovercard">
                    <div
                      className="cardheader"
                      style={{"background": `url(http://lorempixel.com/850/280/nature/${(i+1)}/)`}}>
                    </div>
                    <div className="avatar">
                        <img alt="" src={"http://lorempixel.com/100/100/people/"+(i+1)+"/"} />
                    </div>
                    <div className="info">
                        <div className="title">
                            <a rel="noopener noreferrer" target="_blank">{`${user.firstName} ${user.lastName}`}</a>
                        </div>
                        <div className="desc">{user.title}</div>
                        <div className="desc"><em>@{user.userName}</em></div>
                        <div className="desc"><u>{user.email}</u></div>
                    </div>
                    <div className="bottom">
                        <a className="cardbtn btn btn-primary btn-twitter btn-sm" href="https://twitter.com/">
                            <i className="fa fa-twitter"></i>
                        </a>
                        &nbsp;&nbsp;
                        <a className="cardbtn btn btn-danger btn-sm" rel="publisher"
                          href="https://plus.google.com/">
                            <i className="fa fa-google-plus"></i>
                        </a>
                        &nbsp;&nbsp;
                        <a className="cardbtn btn btn-primary btn-sm" rel="publisher"
                          href="https://facebook.com/">
                            <i className="fa fa-facebook"></i>
                        </a>
                        &nbsp;&nbsp;
                        <a className="cardbtn btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/">
                            <i className="fa fa-behance"></i>
                        </a>
                    </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(About);
