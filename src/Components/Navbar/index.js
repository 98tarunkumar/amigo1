import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,Ncont,NavLogo,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarComponents'
import {MoBln} from './NavbarComponents'
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <Ncont>
                <NavLogo to='/'>
                    dolla
                </NavLogo>
                
                <MoBln onClick={toggle}>
                    <FaBars/>
                </MoBln>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">
                            discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">
                            services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">
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
