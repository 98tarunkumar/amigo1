import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'
import Icon1 from'../../Images/svg-1.svg'
import Icon2 from'../../Images/svg-2.svg'
import Icon3 from'../../Images/svg-6.svg'
const Services = () => {
    return (
        <>

        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>
                        Reduce Expeses
                    </ServicesH2>
                    <ServicesP>
                        we help reduce tour fee and increse your revenue
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>
                        Virtual press
                    </ServicesH2>
                    <ServicesP>
                        we help reducpressing rhe asdasdadadsaa asd
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>
                        another one
                    </ServicesH2>
                    <ServicesP>
                        we help redmake nother ine asdasdas asd
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
