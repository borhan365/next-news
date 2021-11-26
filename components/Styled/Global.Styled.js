import Link from 'next/link'
import styled from 'styled-components'


export const Section = styled.section`
background: black;
padding-bottom: 20px;
`
export const VideoContainer = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0px auto;
  padding-top: 10px;
  background: #0d0c0c;
  padding: 10px;
`
export const HeroWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 10px;
`
export const HeroLeftStyled = styled.div``
export const HeroSidebarStyled = styled.div``
export const StyledHeroSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 15px;
  border-bottom: 1px solid lightgray;
  padding-bottom: ${({pb}) => pb};
  padding-top: ${({pt}) => pt};
`

export const NewsTitle = styled.h2`
  font-size: ${({size}) => size};
  line-height: ${({height}) => height};
  margin: 0px;
  padding: 0px;
  margin-bottom: 5px;
  margin: ${({margin}) => margin};
  position: relative;
  width: ${({width}) => width};
  left: ${({left}) => left};
  color: ${({color}) => color};
  font-weight: ${({weight}) => weight};
`

export const NextImage = styled.img`
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin: ${({margin}) => margin};
  object-fit: ${({fit}) => fit};
`
export const SubTitle = styled.p`
  margin: 0px;
  margin: ${({margin}) => margin};
  color: ${({color}) => color}; 
  font-size: ${({size}) => size};
  padding-top: ${({pt}) => pt};
  margin-top: ${({mt}) => mt};
  font-weight: ${({weight}) => weight};
`
export const SubLeadWrapper = styled.div`

`
export const StyledNewsBox = styled.div`
  border-right: 1px solid lightgray;
  padding-right: 10px;
`
export const SidebarBox = styled.div`
  border-bottom: 1px solid lightgray;
  padding-top: ${({pt}) => pt};
`
export const A = styled(Link)`

`
export const ATag = styled.a`
  text-decoration: none;
  color: black;
  color: ${({color}) => color};

  &:hover {
    color: green;
  }
`
export const StyledFlexNews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 10px;
  border-right: 1px solid lightgray;
  min-height: 100px;
  padding-top: ${({pt}) => pt};
`