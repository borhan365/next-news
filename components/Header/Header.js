import React from 'react'
import TopHeaderSection from './TopHeaderSection/TopHeaderSection'
import { HeaderStyled } from './Header.styled'
import MenuHeaderSection from './MenuHeaderSection/MenuHeaderSection'
import MobileHeader from './Mobile/MobileHeader'
import { MobileHide } from '../Styled/Home.Styled'

function Header() {
  return (
    <>
      <MobileHeader />
      <MobileHide>
        <HeaderStyled>      

            <TopHeaderSection />
            <MenuHeaderSection />

        </HeaderStyled>
      </MobileHide>
    </>
  )
}

export default Header
