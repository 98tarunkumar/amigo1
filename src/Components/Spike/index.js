import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Spike.css'

import Ico1 from'../../Images/svg-1.svg'
import Ico2 from'../../Images/svg-2.svg'
import Ico3 from'../../Images/svg-3.svg'
import Ico4 from'../../Images/svg-4.svg'
import Ico5 from'../../Images/svg-5.svg'
import Ico6 from'../../Images/svg-6.svg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" ,height:'20px'}}
        onClick={onClick}
      />
    );
  }      
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div  
        className={className}
        style={{ ...style, display: "flex", background: "black",justifyContent:'center',height:'auto',width:'auto '}}
        onClick={onClick}
      />
    );
  }


const SpikeContainer = styled.div`
    height: 800px;
   // width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

`
const SpikeWrapper = styled.div`
    max-width: 1000px;
    width:inherit;
    height:400px;
    margin: 0 auto;
    padding-top:10px;
    align-items: center;
    padding: 0 50px;
    background:white;
    border-radius:10px;
   // border:2px solid red;

`
const SpikeCard = styled.div`
    
    background: #000;
    
    border-radius: 20px;
    height:350px;
    
    margin: 10px;
    box-shadow:  0 1px 3px rgba(0,0,0,0.2);
    
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:20px;
    padding:0 50px;
    
    

`
const  SpikeIn=styled.div`
    background:#fff;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px;
    max-height:305px;
    paddin:30px;
    justify-content:center;
    transition: all 0.2s ease-in-out;

    margin-top:6%;
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        }
`


const SpikeH1 = styled.h1`
    font-size:1rem;
    color:white;
    margin-bottom:10px;
`

const Ss=styled.h1`
    color:black;
    font-size:2rem;
`

const Sliderr=styled.div`
        backgroundcolor:red;
`

const SpikeIcon=styled.img`
    height:200px;
    width:300px;
    
`
const SpikeP=styled.p`
        font-size:1rem;
        color:white;
        text-align:center;
        margin-top:20px;

`


const Spike = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyload:true,
        swipetoslide:true,
        nextArrow: <SampleNextArrow  className='left-bb'/>,
        prevArrow: <SamplePrevArrow  className='right-bb'/>,
        // afterChange: function(index) {
        //     console.log(
        //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        //   }
    
      };
    return (
        <>
            <SpikeContainer>
                
                    <SpikeWrapper>
                    <Slider {...settings} className='sli'>
                        {/* <Ss>1q</Ss>
                        <Ss>2w</Ss>
                        <Ss>3e</Ss> */}
                        <div>
                        <SpikeCard>
                            <SpikeIn>
                                <SpikeIcon src={Ico1}>
                                    
                                </SpikeIcon>
                                
                            </SpikeIn>
                            <SpikeIn>
                                hello
                            </SpikeIn>
                        </SpikeCard>
                        </div>
                        <div>
                        <SpikeCard>
                            <SpikeIn>
                                <SpikeIcon src={Ico2}>
                                    
                                </SpikeIcon>
                                
                            </SpikeIn>
                            <SpikeIn>
                                hello
                            </SpikeIn>
                        </SpikeCard>
                        </div>
                        <div>
                        <SpikeCard>
                            <SpikeIn>
                                <SpikeIcon src={Ico3}>
                                    
                                </SpikeIcon>
                                
                            </SpikeIn>
                            <SpikeIn>
                                hello
                            </SpikeIn>
                        </SpikeCard>
                        </div>
                        <div>
                        <SpikeCard>
                            <SpikeIn>
                                <SpikeIcon src={Ico4}>
                                    
                                </SpikeIcon>
                                
                            </SpikeIn>
                            <SpikeIn>
                                hello
                            </SpikeIn>
                        </SpikeCard>
                        </div><div>
                        <SpikeCard>
                            <SpikeIn>
                                <SpikeIcon src={Ico5}>
                                    
                                </SpikeIcon>
                                
                            </SpikeIn>
                            <SpikeIn>
                                hello
                            </SpikeIn>
                        </SpikeCard>
                        </div>
                        <div>
                        <SpikeCard>
                            <SpikeIn>
                                <SpikeIcon src={Ico6}>
                                    
                                </SpikeIcon>
                                
                            </SpikeIn>
                            <SpikeIn>
                                hello
                            </SpikeIn>
                        </SpikeCard>
                        </div>
                        </Slider>
                    </SpikeWrapper>
                
            </SpikeContainer>
        </>
    )
}

export default Spike
