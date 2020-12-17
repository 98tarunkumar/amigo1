import React,{useState} from 'react'
import {HeroCont,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import Video from '../../Videos/video.mp4'
import {Button} from  '../ButtonElement'
const HeroSection = () => {

    const [hover,setHover] =useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroCont>
            <HeroBg>
                <VideoBg  muted loop autoPlay src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual banking made easy
                </HeroH1>
                <HeroP>
                    Sign up for a new Account today
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary="true"
                        dark="true"    
                    >
                        Get started{hover? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroCont>
    )
}
 
export default HeroSection
