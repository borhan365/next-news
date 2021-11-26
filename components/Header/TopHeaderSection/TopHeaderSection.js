import React from 'react'
import {TopHeaderSectionStyled} from '../Header.styled'
import TopHeaderLeft from './TopHeaderLeft'
import TopHeaderRight from './TopHeaderRight'
import TopHeaderMiddle from './TopHeaderMiddle'

function TopHeaderSection() {
  return (
    <TopHeaderSectionStyled>
      <TopHeaderLeft />
      <TopHeaderMiddle />
      <TopHeaderRight />
    </TopHeaderSectionStyled>
  )
}

export default TopHeaderSection
