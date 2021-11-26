import React from 'react'
import { BurgerMenu, Flex, FlexColumn, NowDate, SearchIcon } from '../Header.styled'

function TopHeaderLeft() {
  return (
    <FlexColumn alignItems="flex-start">
        <Flex>
          <BurgerMenu />
          <SearchIcon />
        </Flex>
        <NowDate>বুধবার, ০৬ অক্টোবর ২০২১</NowDate>
    </FlexColumn>
  )
}

export default TopHeaderLeft
