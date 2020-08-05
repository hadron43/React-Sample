import React from 'react';

import Icon from 'components/Icon';

function Card() {
    return (
        <>
        <div className="course">
            <img
            src="https://www.trumplearning.com/wp-content/uploads/2020/01/angular-crash-course.jpg"
            alt=""
            className="is-4by3"
            />
            <div className="card-content">
                <div className="level">
                  <p className="has-text-weight-bold is-pulled-left">
                    Jemmini Kohli
                  </p>
                  <button className="button has-text-white is-pulled-right">
                    Free
                  </button>
                </div>
                <p className="has-text-weight-bold">
                  Angular 2 Essential Training
                </p>
                <br></br>
                <p className="has-text-weight-semibold">JavaScript Framework</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="card-footer">
                <div className="card-footer-content">
                  <div className="card-icon has-text-weight-bold">
                    <Icon name="student" />
                    <p>2,145</p>
                  </div>
                  <div className="card-icon has-text-weight-bold">
                    <Icon name="comment" />
                    <p>412</p>
                  </div>
                  <div className="card-icon has-text-weight-bold">
                    <Icon name="star" />
                    <p>4.9</p>
                  </div>
                  <div className="card-icon has-text-weight-bold">
                    <Icon name="bookmark" />
                  </div>
                </div>
              </div>
            </div>

       </>
    );
}

export default Card;
