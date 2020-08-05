import React from 'react';

function BenefitsCard(props) {
    // Expects title, subtitle, image as props
    return (
        <div className="benefits-card">
            <div className="benefits-card-body is-bg-blue">
                <div className="columns is-vcentered">
                    <div className="column is-12">
                        <h3 className="is-size-4-touch is-size-3-tablet is-size-2-widescreen is-uppercase has-text-white has-text-weight-bold">{props.title}</h3>
                        <p></p>
                        <p className="has-text-white">{props.subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="benefits-card-image">
                <div className="box">
                    <div className="content">
                        <img src={props.image} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BenefitsCard;