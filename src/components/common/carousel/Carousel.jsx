import { useState } from "react";
import "./Carousel.css";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export const Carousel = ({ item }) => {
  const [slide, setSlide] = useState(0);
  const prevImg = () => {
    slide > 0 ? setSlide(slide - 1) : setSlide(0);
  };
  const nextImg = () => {
    slide < item.img.length - 1 ? setSlide(slide + 1) : setSlide(slide);
  };
  return (
    <div className="carousel">
      <FaRegArrowAltCircleLeft className="arrow arrow-left" onClick={prevImg} />
      {item.img.map((i, idx) => {
        return (
          <img
            src={i}
            alt=""
            key={idx}
            className={
              slide == idx ? "carousel-img" : "carousel-img img-hidden"
            }
          />
        );
      })}
      <FaRegArrowAltCircleRight
        className="arrow arrow-right"
        onClick={nextImg}
      />
      <span className="indicators">
        {item.img.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={null}
              className={slide === idx ? "indicator" : "indicator i-inactive"}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
