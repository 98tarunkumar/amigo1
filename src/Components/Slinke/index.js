import React, { Component,useState } from 'react'
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Sli.css'
import Carousel from 'react-bootstrap/Carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div  
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }

export class index extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            fade:false,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyload:true,
            //className: "center",
            //centerMode:true,
            swipetoslide:true,
            //centerPadding:"50px",
            // responsive: [
            //     {
            //       breakpoint: 1024,
            //       settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //       }
            //     },
            //     {
            //       breakpoint: 600,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         initialSlide: 2
            //       }
            //     },
            //     {
            //       breakpoint: 480,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ],
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            afterChange: function(index) {
                console.log(
                  `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
              }
        
          };
        return (
            <>
            <div>
                
            </div>


            <Slider {...settings} className='slide'>
              <div>
                <h3>
                    hello
                </h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
            </>
          
        )
    }
}

export default index
