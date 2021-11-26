import React from 'react'
import { MobileHide } from '../Styled/Home.Styled'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

function CategroyContent() {
  return (
    <div>
      <FirstSection />
        <MobileHide>
            <SecondSection />
        </MobileHide>
      <ThirdSection />
    </div>
  )
}

export default CategroyContent
