import React from 'react'
import { A, ATag } from '../../Styled/Home.Styled'
import { Logo } from '../Header.styled'

const logo = "https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg"

function TopHeaderMiddle() {
  return (
    <div>
      <A href="/" passHref>
        <ATag>
        <Logo src={logo} alt="logo" />
        </ATag>
      </A>
    </div>
  )
}

export default TopHeaderMiddle
