import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import LoginModal from 'components/LoginModal';
import { Component } from 'react';

class Navbar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isLoginModalOpen: false
    }
    this.loginModalSateToggler = this.loginModalStateToggler.bind(this);
    this.setisActive = this.setisActive.bind(this);
  }

  loginModalStateToggler() {
    this.setState({
        isLoginModalOpen: !this.state.isLoginModalOpen
    });
  }

  setisActive() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <>
        <LoginModal isModalOpen={this.state.isLoginModalOpen} 
          stateToggler={this.loginModalSateToggler} />
        <nav
          className="navbar container has-text-weight-bold"
          role="navigation"
          aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1 className="is-size-2 has-text-weight-bold">Codewayy</h1>
            </Link>

            <button
              onClick={this.setisActive}
              className={`navbar-burger burger ${this.state.isActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start ">
              <a className="navbar-item has-text-link">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link has-text-link">
                  Courses
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item has-text-link">
                    Course A
                  </a>
                  <a className="navbar-item has-text-link">
                    Course B
                  </a>
                  <a className="navbar-item has-text-link">
                    Course C
                  </a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link has-text-link">
                  Contact
                </a>
                <div className="navbar-dropdown has">
                  <a className="navbar-item has-text-link">
                    Avsx
                  </a>
                  <a className="navbar-item has-text-link">
                    sadasd
                  </a>
                  <a className="navbar-item has-text-link">
                    sadasd
                  </a>
                </div>
              </div>
              <a className="navbar-item has-text-link">
                About
              </a>
              <Link className="navbar-item has-text-link" to="/mentor">
                  Mentor
              </Link>
            </div>
            <div className="navbar-end pt-1">
              <div className="navbar-item">
                <a>
                  <img src="graphics/Card icon.svg" />
                </a>
              </div>	
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-rounded is-link" onClick={this.loginModalSateToggler}>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
      </nav>
      </>
    );
  }
}

export default Navbar;
