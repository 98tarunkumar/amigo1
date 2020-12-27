import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'
import Icon1 from'../../Images/send.svg'
import Icon2 from'../../Images/voln.svg'
import Icon3 from'../../Images/receive.svg'
const Services = () => {
    return (
        <>

        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <a style={{textAlign:'center',color:'black'}} href='/send'>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>
                        Share Resources
                    </ServicesH2>
                    <ServicesP>
                        Help those in need with your non-usable resources
                    </ServicesP>
                    </a>
                </ServicesCard>

                <ServicesCard>
                <a style={{textAlign:'center',color:'black'}} href='/volunteer'>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>
                        Be a Volunteer
                    </ServicesH2>
                    <ServicesP>
                        Be a guide for someone, so that they can be for others
                    </ServicesP>
                    </a>
                </ServicesCard>
                <ServicesCard>
                <a style={{textAlign:'center',color:'black'}} href='/receive'>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>
                        Receive Resources
                    </ServicesH2>
                    <ServicesP>
                        Make requests for resources those are urgent
                    </ServicesP>
                    </a>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
