import React from 'react'
import { StyledHeroSection } from '../../Styled/Home.Styled'
import ThirdData from './ThirdData'
import FlexNews from './FlexNews'

function HeroThirdSection() {
  return (
    <StyledHeroSection pt="10px" pb="10px">
        {
          ThirdData.slice(0, 3).map((news, index) => (
            <FlexNews key={index} news={news} />
          ))
        }
    </StyledHeroSection>
  )
}

export default HeroThirdSection
