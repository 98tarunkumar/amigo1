import React from 'react'
import {SidebarContainer,CloseIcon,Icon,SidebarLink,SidebarWrapper,SideMenu,SidebarRoute,SidebtnWrap} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SideMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        signup
                    </SidebarLink>
                </SideMenu>
                <SidebtnWrap>
                    <SidebarRoute to="/signin">
                        Sign in
                    </SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
