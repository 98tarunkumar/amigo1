import React,{useState} from 'react'

import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import Sidebar from '../Components/Sidebar'

import DropTuto from '../Components/Dropdown/index'
import Slinke from '../Components/Slinke'
import { SliderData } from '../Components/Slinke/slikeScroll'
import Spike from '../Components/Spike'
import Cards from '../Components/Cards'
import SignUp from '../Components/SignUp'
import Send from '../Components/Send'
import Volun from '../Components/Volun'


const Home = () => {
    
    const [isOpen,setIsOpen]=useState(false)

    const toggle= () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* <Volun/> */}
            {/* <Send/> */}
            {/* <SignUp/> */}
            {/* <Cards/>  */}
            {/* <DropTuto/>  */}
            {/* <Spike/> */}
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
