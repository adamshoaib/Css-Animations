import react from "react";
import "./AnimationOne.scss";
import Cloud from "../../Assets/cloud.svg";
import Car from "../../Assets/car.svg";
import Ambulance from "../../Assets/ambulance.svg";

const AnimationOne = () => {
  return (
    <>
      <div className="animation-one-container">
        <img
          className="cloud-img"
          width="300"
          height="250"
          src={Cloud}
          alt="cloud"
        />
      </div>
      <div className="animation-one-grass"></div>
      <div className="animation-one-road">
        <div className="animation-one-road-lines"></div>
        <img
          className="car-img"
          width="200"
          height="250"
          src={Car}
          alt="cloud"
        />
        <img
          className="ambulance-img"
          width="200"
          height="190"
          src={Ambulance}
          alt="cloud"
        />
      </div>
      {/* <div className="animation-one-button-container">
        <button className="hover-button">Hover Me</button>
      </div> */}
    </>
  );
};

export default AnimationOne;
