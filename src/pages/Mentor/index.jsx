import React from 'react';
import * as Images from 'assets/mentor-page';
import BenefitsCard from './BenefitsCard';
import MentorCarousel from './MentorCarousel';
import StepsCards from './StepsCards';
import ApplyCards from './ApplyCards';

function Mentor() {
    return (
        <div>
            <section className="hero mentor-hero is-medium is-bold">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column is-half is-offset-1">
                            <h1 className="title has-text-blue">
                                Become a Mentor
                            </h1>
                            <h2 className="subtitle has-text-blue">
                                This is your chance to give back to the community - mentor Scaler students to help them unlock their true potential.
                            </h2>
                            <a className="button is-rounded is-medium is-bg-blue has-text-white">
                                Apply Now
                            </a>
                        </div>

                        <div className="column">
                            Image
                        </div>
                    </div>
                </div>
            </section>

            <section className="mentor-section">
                <div className="columns">
                    <div className="column is-offset-1 is-10">
                        <h1 className="is-size-3 has-text-blue has-text-weight-bold">
                        Codewayy Mentorship Program
                    </h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-5 is-offset-1">
                        <p>
                            We are building Scalar with a core mission of helping
                            poeple unlock their true potential so they could land
                            the better tech jobs they actually deserve. We cannot
                            do it just by ourselves - we're looking for the like-
                            minded people who believe in the same mission.
                        </p>
                        <p>
                            Being a Mentor at Scalar means helping students to achieve
                            their dreams by leading them in their path to success.
                            Mentors are an integral part of the Scalar community -
                            they are coaches and role models for the students seeking
                            help in their careers and lives.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mentor-section">
                <div className="companies columns">
                    <div className="column is-2"></div>
                    <div className="column">
                        <hr />
                        <div className="columns">
                            <h2 className="is-size-4 has-text-blue column has-text-centered">
                                Join the network - Scalar mentors come from top tech companies
                            </h2>
                        </div>
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered">
                                <img src={Images.Apple} />
                            </div>
                            <div className="column has-text-centered">
                                <img src={Images.Hubspot} />
                            </div>
                            <div className="column has-text-centered">
                                <img src={Images.Airbus} />
                            </div>
                            <div className="column has-text-centered">
                                <img src={Images.Dekra} />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="column is-2"></div>
                </div>
            </section>


            <section className="mentor-section">
                <div className="columns">
                    <div className="column is-offset-1">
                        <h1 className="is-size-3 has-text-weight-bold has-text-blue">
                            Why become a Mentor?
                        </h1>
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="tile is-ancestor">
                            <div className="tile is-6 is-vertical is-parent">
                                <div className="is-stupid-child">
                                    <BenefitsCard title="Growth" 
                                        subtitle="Practice Leadership and Management Stratergies"
                                        image={Images.Statistics} />
                                </div>
                                
                                <div className="is-stupid-child">
                                    <BenefitsCard title="Community" 
                                        subtitle="Build a network of trusted students who can become high quality candidate for your company"
                                        image={Images.Meeting} />
                                </div>
                            </div>

                            <div className="tile is-6 is-vertical is-parent">
                                <div className="is-stupid-child">
                                    <BenefitsCard title="Give Back to Community" 
                                        subtitle="Guide the students personally and have a significant impact on their lives"
                                        image={Images.Join} />
                                </div>
                                
                                <div className="is-stupid-child">
                                    <BenefitsCard title="Extra Income" 
                                        subtitle="Refer Students to your company and earn some extra income"
                                        image={Images.Profit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mentor-section mentors">
                <div className="columns">
                    <div className="column is-offset-1">
                        <div className="line"></div>
                        <h3 className="is-size-3 has-text-black has-text-weight-bold">
                            What other mentors have to say?
                        </h3>
                    </div>
                </div>
                <div className="grey">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <MentorCarousel />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mentor-section">
                <div className="columns is-vcentered">
                    <div className="column is-6">
                        image
                    </div>
                    <div className="column is-5 join">
                        <h3 className="is-size-3 has-text-weight-bold has-text-blue">Join Our Team</h3>
                        <p></p>
                        <p className="is-size-4">
                            You should be able to spend atleast1 hour every month for each student 
                            you are mentoring in India Time Zone
                        </p>
                        <p className="is-size-4">
                            You should be available for a minimum period of 6 months <br />
                            (duration of the program)
                        </p>
                    </div>
                </div>
            </section>

            <hr />

            <section className="mentor-section">
                <div className="columns is-multiline">
                    <div className="column is-10 is-offset-1">
                        <h1 className="is-size-3 has-text-weight-bold has-text-blue">How it works</h1>
                    </div>
                    <div className="column is-10 is-offset-1">
                        <StepsCards />
                    </div>
                </div>
            </section>

            <section className="mentor-section apply">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h3 className="is-size-3 has-text-weight-bold has-text-black has-text-centered">Ready to join as a Mentor?</h3>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <ApplyCards />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Mentor;