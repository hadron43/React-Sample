import React from 'react';

function ApplyCards() {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-6 is-vertical is-parent">
                <div className="is-stupid-child">
                    <RenderCard 
                        heading="Mentor Registration for all programming courses, development skills."/>
                </div>
                
                <div className="is-stupid-child">
                    <RenderCard 
                        heading="Mentor Registration for open source preparation."/>
                </div>
            </div>

            <div className="tile is-6 is-vertical is-parent">
                <div className="is-stupid-child">
                    <RenderCard 
                        heading="Mentor Registration for interview preparation courses."/>
                </div>
                
                <div className="is-stupid-child">
                    <RenderCard 
                        heading="Mentor Registration for programming bootcamp."/>
                </div>
            </div>
        </div>     
            
    );
}

function RenderCard (props) {
    // expects heading as props
    return (
        <div className="apply-card">
            <div className="container">
                <h1 className="is-size-4 has-text-weight-bold has-text-blue content">
                    {props.heading}
                </h1>
            </div>
            <a className="button is-bg-blue apply-button has-text-white has-text-weight-bold is-size-5">Apply Here</a>
        </div>
    );
}

export default ApplyCards;