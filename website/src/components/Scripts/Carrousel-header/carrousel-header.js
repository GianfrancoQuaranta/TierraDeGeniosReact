import React, {useState,} from 'react'
import './carrousel-header.css'
// import BtnSlider from './slider'
import dataSlider from './dataSlider'




export default function Slider() {
    const [slideIndex,] = useState(1)
    // setSlideIndex adentro de const falta

    // function useAsync(asyncFn, onSuccess) {
    //     useEffect(() => {
    //     let isActive = true;
    //     asyncFn().then(data => {
    //         if (isActive) onSuccess(data);
    //     });
    //     return () => { isActive = false };
    //     }, [asyncFn, onSuccess]);
    // }

    // const nextSlide = () => {
    //     if(slideIndex !== dataSlider.length){
    //         setSlideIndex(slideIndex + 1)
    //     } 
    //     else if (slideIndex === dataSlider.length){
    //         setSlideIndex(1)
    //     }
    // }

    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else if (slideIndex === 1){
    //         setSlideIndex(dataSlider.length)
    //     }
    // }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <React.Fragment key={index + 1}>
                        <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} >
                        <img src={process.env.PUBLIC_URL + `./img/img${index + 1}.jpg`} alt={"imagen" + (index + 1)} />
                        </div>
                    </React.Fragment>
                )
            })}
            {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}

            {/* <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div key={index + 1}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
        </div>
    )
}