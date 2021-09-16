import React from "react";
import SectionHeading from "../shared/SectionHeading";
import "../StyleSheet.css";
import t1 from "../assets/doozy media from wix/Testimonial 1.png";
import t2 from "../assets/doozy media from wix/Testimonial 2.png";
import t3 from "../assets/doozy media from wix/Testimonial 3.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function Testimonials() {
  return (
    <div className="divTestimonialMain" id="testimonials">
      <SectionHeading titleText="Testimonials" />
      <div style={{ width: "25em", height: "auto" }}>
        <Carousel nextLabel="" prevLabel="">
          <Carousel.Item>
            <img className="d-block w-100" src={t1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={t2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={t3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
