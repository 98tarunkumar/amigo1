import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,Ncont,NavLogo,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarComponents'
import {MoBln} from './NavbarComponents'
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav] =useState(false)

    const changeNav = () =>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome=() =>{
        scroll.scrollToTop()
    }

    return (
        <>
        <Nav scrollNav={scrollNav} >
            <Ncont>
                <NavLogo to='/' onClick={toggleHome}>
                    Amigo
                </NavLogo>
                
                <MoBln onClick={toggle}>
                    <FaBars/>
                </MoBln>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >
                            discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >
                            services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >
                            signup
                        </NavLinks>
                    </NavItem>
                </NavMenu>


                <NavBtn>
                    <NavBtnLink to="/signin">
                        SignIn
                    </NavBtnLink>
                </NavBtn>
            </Ncont>
        </Nav>

        </>
    )
}

export default Navbar
