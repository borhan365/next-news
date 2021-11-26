import React from 'react'
import { Col, Flex } from '../../Styled/Home.Styled'
import HeroLeft from './HeroLeft'
import HeroSidebar from './HeroSidebar'

function HeroSection() {
  return (
    <>
      <Flex Mfd="column">

          <Col width="75%" Mwidth="100%">
              <HeroLeft />
          </Col>

          <Col width="25%" Mwidth="100%">
              <HeroSidebar />
          </Col>

      </Flex>
    </>
  )
}

export default HeroSection
