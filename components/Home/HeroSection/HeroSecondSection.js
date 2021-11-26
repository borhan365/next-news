import React from 'react'
import { Flex } from '../../Styled/Home.Styled'
import Data from './Data'
import HeroSecondSectionNews from './HeroSecondSectionNews'

function HeroSecondSection() {
  return (
    <Flex pt="15px" pb="15px" >
        {
          Data.map((news, index) => (
            <HeroSecondSectionNews key={index} news={news} />
          ))
        }
    </Flex>
  )
}

export default HeroSecondSection
