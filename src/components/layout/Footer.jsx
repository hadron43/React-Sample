import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Footer extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
      <div>
        <section className="hero is-dark has-text-white pb-6 mb-1">
          <div className="columns mt-3">
            <div className="column is-1">
            </div>
            <div className="column has-text-left">
              <b className="is-size-5">Codewayy</b>
              <p className="has-text-left is-size-7"> It was some time before he obtained any answer, and the reply, when made was unpropitious.<br /></p>	
            </div>
            <div className="column is-1">
            </div>
            <div className="column is-1">
            </div>
            <div className="column has-text-left has-text-white">
              <b className="is-size-6">Codewayy</b><br />
              <a className="has-text-white is-size-7">About Us</a><br />
              <a className="has-text-white is-size-7">Become a Mentor</a><br />
              <a className="has-text-white is-size-7">Become a TA</a><br />
              <a className="has-text-white is-size-7">Become a Career Coach</a><br />
              <a className="has-text-white is-size-7">Scaler Blog</a><br />
              <a className="has-text-white is-size-7">Frequently Asked Questions</a><br />
              <a className="has-text-white is-size-7">Terms of Use</a><br />
              <a className="has-text-white is-size-7">Privacy Policy</a><br />
            </div>
            <div className="column is-1">
            </div>
            <div className="column has-text-left">
              <b className="is-size-6">CONTACT US</b><br />
              <p className="is-size-7">Email: hello@codewayyy.com</p>
              <br /><b className="is-size-6">SUBSCRIBE US</b>
            </div>
          </div></section>
        <div className="content has-background-link has-text-centered has-text-white ">
          © 2020 Codewayy. All Right Reserved.
        </div>
      </div>
      </>
    );
  }
}
export default Footer;
