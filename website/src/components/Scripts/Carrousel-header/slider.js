import React from "react";
import "./carrousel-header.css";
import leftArrow from "./img/icons/flecha-izquierda.svg";
import rightArrow from "./img/icons/flecha-derecha.svg";

export default function BtnSlider({ direction, moveSlide }) {
return (
    <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    <img src={direction === "next" ? rightArrow : leftArrow }  />
    </button>
);
}