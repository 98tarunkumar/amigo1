import React from 'react'

const Footer = () => {
    return (
        <>
            <FooterContiner>
                <FooterWrap>
                    <FooterLinksContainer>
                        <footerLinksWapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>                            
                                <FooterLink to='/signin'>how it works
                                </FooterLink>
                                <FooterLink to='/signin'>TEstimonials
                                </FooterLink>
                                <FooterLink to='/signin'>Carriers
                                </FooterLink>
                                <FooterLink to='/signin'>Inverstors
                                </FooterLink>
                                <FooterLink to='/signin'>terms of service
                                </FooterLink>
                            </FooterLinkItems>
                        </footerLinksWapper>
                    </FooterLinksContainer>
                </FooterWrap>
            </FooterContiner>  
        </>
    )
}

export default Footer
