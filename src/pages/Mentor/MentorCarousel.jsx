import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import * as Images from 'assets/mentor-page';

function MentorCarousel(){
  return(
    <>
      <Carousel
        slidesPerPage={3}
        centered
        arrows
        infinite
        autoPlay={4000}
        animationSpeed={1000}
        breakpoints={{
          640: {
            slidesPerPage: 1,
            arrows: false,
          },
          1300: {
            slidesPerPage: 2,
            arrows: false,
          },
        }}>
        
        <RenderMentor 
          image="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
          name="Jemmi Koli"
          heading="This is a great opportunity to give back to people and help people"
          content="Et fugiat ullamco veniam dolore aute sit officia Lorem incididunt. Laborum occaecat laborum adipisicing labore amet excepteur."
          comapnyImage={Images.Google}/>
        <RenderMentor 
          image="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
          name="Jemmi Koli"
          heading="This is a great opportunity to give back to people and help people"
          content="Et fugiat ullamco veniam dolore aute sit officia Lorem incididunt. Laborum occaecat laborum adipisicing labore amet excepteur."
          comapnyImage={Images.Google}/>
        <RenderMentor 
          image="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
          name="Jemmi Koli"
          heading="This is a great opportunity to give back to people and help people"
          content="Et fugiat ullamco veniam dolore aute sit officia Lorem incididunt. Laborum occaecat laborum adipisicing labore amet excepteur."
          comapnyImage={Images.Google}/>
        <RenderMentor 
          image="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
          name="Jemmi Koli"
          heading="This is a great opportunity to give back to people and help people"
          content="Et fugiat ullamco veniam dolore aute sit officia Lorem incididunt. Laborum occaecat laborum adipisicing labore amet excepteur."
          comapnyImage={Images.Google}/>
      </Carousel>
    </>
  );
}

function RenderMentor(props) {
  //requires image, heading, content, companyImage as props
  return (
    <div className="mentor-carousel-item is-flex">
      <div className="columns is-multiline">
        <div className="column is-12">
          <img src={props.image} alt="File Photo" className="profile-pic is-flex"/>
        </div>
        <div className="column is-12 name-container">
          <div className="name">
            <h4 className="is-size-4">
              {props.name}
            </h4>
            <div className="name-border is-bg-blue"></div>
          </div>
        </div>
        <div className="column is-12">
          <h6 className="is-size-6 has-text-weight-bold">
            {props.heading}
          </h6>
        </div>
        <div className="column is-12">
          <p className="content">
            {props.content}
          </p>
        </div>
        <div className="column is-flex">
          <img src={props.comapnyImage} alt="Company" />
        </div>
      </div>
    </div>
  );
}

export default MentorCarousel;