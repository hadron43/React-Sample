import React from 'react';
import { Component } from 'react';

function LoginModal(props) {
    //expects isModalOpen, stateToggler as props
    return (
        <div className={`modal login-modal ${(props.isModalOpen ? 'is-active' : '')}`}>
            <div class="modal-background" onClick={props.stateToggler}></div>
            <div class="modal-card">
                <section class="modal-card-body is-bg-lightblue">
                    <div className="columns is-gapless">
                        <div className="column is-2 is-hidden-mobile">
                            Image
                        </div>
                        <div className="column is-2"></div>
                        <div className="column is-half">
                            <div className="container main-container">
                                <h2 className="is-size-3 has-text-centered has-text-weight-bold has-text-blue">
                                    CODEWAYY
                                </h2>

                                <p className="has-text-centered">
                                    Please create a new account here
                                </p>

                                <form>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-medium" type="text" placeholder="Full Name" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-medium" type="email" placeholder="Email Address" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-medium" type="password" placeholder="Password" />
                                        </div>
                                    </div>

                                    
                                    <p className="has-text-right">
                                        Already have an account?&nbsp;
                                        <a className="has-text-blue">
                                            Sign Up
                                        </a>
                                    </p>
                                    

                                    <div className="field">
                                        <button className="button is-large is-fullwidth is-rounded is-bg-blue has-text-white">
                                            Sign In
                                        </button>
                                    </div>

                                    <p className="has-text-centered">
                                        Or Sign in using
                                    </p>

                                    <div class="field is-grouped">
                                        <button class="button is-halfscreen is-large is-rounded">
                                            <span className="has-text-link">Google</span>
                                            <span class="icon is-large">
                                                <i class="fab fa-google"></i>
                                            </span>
                                        </button>
                                        <span className="empty-7"></span>
                                        <button class="button is-halfscreen is-large is-rounded">
                                            <span>Github</span>
                                            <span class="icon is-large is-inline-block">
                                                <i class="fab fa-github-square"></i>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="close-modal">
                    <a class="fa fa-times fa-2x has-text-blue" onClick={props.stateToggler}></a>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;