import React, { useRef } from "react";
import "./AnimationOne.scss";
import Cloud from "../../Assets/cloud.svg";
import Car from "../../Assets/car.svg";
import Ambulance from "../../Assets/ambulance.svg";
import WhiteCloud from "../../Assets/white-cloud.svg";
import Sun from "../../Assets/sun.svg";
import Snail from "../../Assets/snail.svg";
import Bird from "../../Assets/bird.svg";
import Grave from "../../Assets/grave.svg";
import Ghost from "../../Assets/ghost.svg";

const AnimationOne = () => {
  const graveImgRef = useRef(null);
  const ghostImgRef = useRef(null);

  const shakeGrave = () => {
    if (graveImgRef.current) {
      graveImgRef.current.classList.add("grave-shake");
    }

    setTimeout(() => {
      graveImgRef.current.classList.remove("grave-shake");
      if (ghostImgRef.current) {
        ghostImgRef.current.classList.add("awake-ghost");
      }
    }, 2000);

    setTimeout(() => {
      ghostImgRef.current.classList.remove("awake-ghost");
    }, 7000);
  };
  return (
    <>
      <div className="animation-one-container">
        <img
          className="cloud-img"
          width="200"
          height="150"
          src={Cloud}
          alt="cloud"
        />
        <img
          className="sun-img"
          width="100"
          height="100"
          src={Sun}
          alt="cloud"
        />
        <img
          className="white-cloud-img"
          width="200"
          height="150"
          src={WhiteCloud}
          alt="cloud"
        />
        <img
          className="bird-img"
          width="50"
          height="50"
          src={Bird}
          alt="cloud"
        />
      </div>
      <div className="animation-one-grass">
        <img
          className="snail-img"
          width="50"
          height="50"
          src={Snail}
          alt="cloud"
        />
        <img
          ref={ghostImgRef}
          className="ghost-img"
          width="50"
          height="50"
          src={Ghost}
          alt="cloud"
        />
        <img
          ref={graveImgRef}
          className="grave-img"
          width="70"
          height="70"
          src={Grave}
          onClick={() => {
            shakeGrave();
          }}
          alt="cloud"
        />
      </div>
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
