import React,{useState} from 'react'
import {HeroCont,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import Video from '../../Videos/covid1.mp4'
import {Button} from  '../ButtonElement'
const HeroSection = () => {

    const [hover,setHover] =useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroCont id='home'>
            <HeroBg>
                <VideoBg  muted loop autoPlay src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    AMIGO
                </HeroH1>
                <HeroP>
                    A sweet friendship refreshes the 'Soul'.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary="true"
                        dark="true"   
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                    >
                        Get started{hover? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroCont>
    )
}
 
export default HeroSection
