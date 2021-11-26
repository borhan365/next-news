import React from 'react'
import Card from './Card'
import Data from './Data'
import { Image, SidebarBox } from '../../Styled/Home.Styled'
import ThirdData from './ThirdData'
import FlexNews from './FlexNews'
import HeroSidebarListNews from './HeroSidebarListNews'

function HeroSidebar() {
  return (
    <>
    <SidebarBox>
      <Image width="100%" margin="0px 0px 10px 0px" src="https://tpc.googlesyndication.com/simgad/18214999396328338967" />
    </SidebarBox>
    <SidebarBox pt="10px">
      {
        Data.slice(0, 1).map((news, index) => (
          <Card key={index} news={news} />
        ))
      }
    </SidebarBox>
    <SidebarBox>
      {
        ThirdData.slice(0, 1).map((news, index) => (
          <HeroSidebarListNews key={index} news={news} />
        ))
      }
    </SidebarBox>
    </>
  )
}

export default HeroSidebar
