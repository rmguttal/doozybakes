import React from "react";
import SectionHeading from "./SectionHeading";
import "./StyleSheet.css";
import t1 from "./assets/doozy media from wix/Testimonial 1.png";
import t2 from "./assets/doozy media from wix/Testimonial 2.png";
import t3 from "./assets/doozy media from wix/Testimonial 3.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function TestimonialsSection() {
  return (
    <div className="divTestimonialMain" id="testimonials">
      <SectionHeading titleText="Testimonials" />
      {/* <div className="divSlider">
        <Slider className="sliderTestimonial" {...settings}>
          <div style={{ width: "100%" }}>
            <img className="imgTestimonial" src={t1} />
          </div>
          <div style={{ width: "100%" }}>
            <img className="imgTestimonial" src={t2} />
          </div>
          <div style={{ width: "100%" }}>
            <img className="imgTestimonial" src={t3} />
          </div>
        </Slider>
      </div> */}
      {/* <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={t1}
              alt="First slide"
              style={{ height: "300px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={t2}
              alt="Second slide"
              style={{ height: "300px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={t3}
              alt="Third slide"
              style={{ height: "300px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div> */}

      <div style={{ width: "25em", height: "auto" }}>
        {/* <div className="container-fluid"> */}
        {/* <div className="row">
            <div className="col-12"> */}
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
        {/* </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default TestimonialsSection;
