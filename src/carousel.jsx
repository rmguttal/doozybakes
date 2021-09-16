import React from "react";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import t1 from "../assets/doozy media from wix/Testimonial 1.png";
import t2 from "../assets/doozy media from wix/Testimonial 2.png";
import t3 from "../assets/doozy media from wix/Testimonial 3.png";

class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div style={{ width: "25em", height: "auto" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h3>React Bootstrap Carousel</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
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
        </div>
      </div>
    );
  }
}

export default BootstrapCarouselComponent;
