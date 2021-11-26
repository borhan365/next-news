import { AiOutlineMenu } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import { GrNotification } from 'react-icons/gr'
import { FiChevronDown } from 'react-icons/fi'
import { CgRadioCheck, CgRadioChecked } from 'react-icons/cg'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

// top header section 
// ===================

export const HeaderStyled = styled.section`
  padding: 20px 0px;
  display: ${({display}) => display};
`
export const TopHeaderSectionStyled = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// header left area
export const FlexColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: ${({alignItems}) => alignItems};
  grid-gap: 20px;
  flex-direction: column;
`
export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 10px;
`
export const BurgerMenu = styled(AiOutlineMenu)`
  font-size: 30px;
`
export const SearchIcon = styled(GoSearch)`
  font-size: 30px;
`
export const NowDate = styled.span`
  font-size: 17px;
  color: #575757;
`

// header middle area
export const Logo = styled.img`
  width: 260px;
  height: auto;
`

// header right side
export const NotificationIcon = styled(GrNotification)`
  font-size: 30px;
`
export const ButtonOutlined = styled.button`
  border: 1px solid #0f9fff;
  padding: 4px 18px;
  color: #0f9fff;
  border-radius: 2px;
  background: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: bangla;
  margin: ${({margin}) => margin};
  margin-top: ${({mt}) => mt};
  display: flex;
  justify-content: ${({jc}) => jc};
  align-items: ${({ai}) => ai};
  width: ${({width}) => width};
  


  &:hover {
    background: #0f9fff;
    color: white;
  }
`
export const VersionWrapper = styled.div`
position: absolute;
    top: 25px;
    background: white;
    padding: 20px;
    right: 0px;
    box-shadow: -1px 3px 10px 0px lightgrey;
    border-radius: 3px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
` 
export const VersionTitle = styled.ul`
  font-size: 18px;
  list-style: none;
  margin: 0px;
  position: relative;
  cursor: pointer;

  &:hover ${VersionWrapper} {
    visibility: visible;
    opacity: 1;
    top: 27px;
  }
`
export const VersionItem = styled.li`
    list-style: none;
    padding: 4px 0px;
    width: max-content;
    display: flex;
    justify-content: flex-start;
    grid-gap: 10px;
`
export const VersionLink = styled.li`
  color: black;
`
export const Bold = styled.span`
  font-weight: bold;
`
export const DownIcon = styled(FiChevronDown)`
  font-size: 20px;
  margin-bottom: -5px;
  margin-left: -3px;
`
// dropdown menu 
export const RadioButtonChecked = styled(CgRadioChecked)`
font-size: 18px;
`
export const RadioButton = styled(CgRadioCheck)`
  font-size: 18px;
`

// menu header section
export const MenuHeaderSectionStyled = styled.section`
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 2px solid #e2e2e2;
  margin-top: 20px;
`
export const MenuHeaderContainer = styled.section`
  width: 1250px;
  max-width: 100%;
  margin: 0px auto;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MenuWrapper = styled.ul`
  list-style: none; 
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
`
export const MenuLink = styled.li`
  padding: 5px 0px;
  color: #3c3c3c;
  font-weight: bold;
  font-size: 18px;
  font-family: bangla;
`