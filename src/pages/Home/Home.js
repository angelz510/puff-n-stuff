import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router";
// import Carousel from "react-bootstrap/Carousel";
// import MainLogo from "../../assets/puff-logo.jpeg";
// import Front from "../../assets/store-front.jpeg";
// import Counter from "../../assets/pos.jpeg";
// import Glass from "../../assets/glass.jpeg";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isAuth === false) navigate("/");
  }, []);
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      {/* <Carousel
        className="carousel"
        controls={false}
        indicators
        interval={2500}
        pause={false}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={MainLogo} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Front} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Counter} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Glass} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default Home;
