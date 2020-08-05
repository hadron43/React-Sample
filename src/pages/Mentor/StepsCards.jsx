import React from 'react';
import * as Images from 'assets/mentor-page';

function StepsCards (props) {
    return (
        <div className="steps-cards">
            <div className="columns is-vcentered is-multiline">
                <div className="column is-one-fifth steps-card">
                    <RenderCard 
                        image={Images.Resume}
                        heading="Step 1"
                        />
                </div>
                <div className="column  is-one-fifth line is-bg-blue"></div>
                <div className="column is-one-fifth  steps-card">
                    <RenderCard 
                        image={Images.Search}
                        heading="Step 2"
                        />
                </div>
                <div className="column is-one-fifth line is-bg-blue"></div>
                <div className="column is-one-fifth steps-card">
                    <RenderCard 
                        image={Images.Staff}
                        heading="Step 3"
                        />
                </div>
            </div>
            
            <div className="columns">
                <div className="column">
                    <h3 className="has-text-centered has-text-blue
                    is-size-6-touch is-size-5-tablet is-size-4-widescreen
                    has-text-weight-bold title">You Apply</h3>
                    <p className="has-text-centered is-size-6">
                        Fill out the application or reach out directly to us if you have any questions.
                    </p>
                </div>
                <div className="column"></div>
                <div className="column">
                    <h3 className="has-text-centered has-text-blue 
                    is-size-6-touch is-size-5-tablet is-size-4-widescreen has-text-weight-bold title">Youe profile is reviewed</h3>
                    <p className="has-text-centered is-size-6">
                        If your profile matches our criteria we will give you a call to discuss further steps.
                    </p>
                </div>

                <div className="column"></div>
                <div className="column">
                    <h3 className="has-text-centered has-text-blue 
                    is-size-6-touch is-size-5-tablet is-size-4-widescreenhas-text-weight-bold title">You Mentor</h3>
                    <p className="has-text-centered is-size-6">
                        Once enrolled in the mentorship program, log in to see a personalised dashboard with the students.
                    </p>
                </div>
            </div>
        </div>
    );
}

function RenderCard(props) {
    // Expects image, heading as props
    return (
        <div className="columns is-multiline card-container">
            <div className="column is-12 image-container">
                <img src={props.image} alt="Image" />
            </div>

            <div className="column is-12">
                <h3 className="
                    is-size-5-touch is-size-4-tablet is-size-3-widescreen is-uppercase has-text-blue has-text-weight-bold has-text-centered heading">
                    {props.heading}
                </h3>
            </div>
        </div>
    );
}

export default StepsCards;