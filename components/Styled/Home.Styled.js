import Link from 'next/link'
import { BsChevronRight, BsFillPlayCircleFill } from 'react-icons/bs'
import { CgRadioCheck, CgRadioChecked } from 'react-icons/cg'
import { FaFacebookSquare, FaImages, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'


const common = {
  fontSize: "20px",
}

const colors = {
  PrimaryColor: "#0f9fff",
  Gray: "gray"
}

const media = {
  desktop: '@media (min-width: 1024px)',
  mobile: '@media (max-width: 768px)'
}

export const MobileHide = styled.div`
  ${media.mobile} {
    display: none;
  }
`
export const DesktopHide = styled.div`
  ${media.desktop} {
    display: none;
  }
`


export const Section = styled.section`
background: black;
padding-bottom: 20px;
`
export const Container = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0px auto;

  ${media.mobile} {
    max-width: 95%;
  }
`
export const MaxContainer = styled.div`
  width: 900px;
  max-width: 100%;
  margin: 0px auto;

  ${media.mobile} {
    max-width: 95%;
  }
`
export const VideoContainer = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0px auto;
  padding-top: 10px;
  background: #0d0c0c;
  padding: 10px;
`
export const StyledHeroSection = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 15px;
  border-bottom: 1px solid lightgray;
  padding-bottom: ${({pb}) => pb};
  padding-top: ${({pt}) => pt};

  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`

export const NewsTitle = styled.h2`
  font-size: ${common.fontSize};
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
  border-bottom: ${({bb}) => bb};
  padding-bottom: ${({pb}) => pb};

  ${media.mobile} {
    font-size: ${({Msize}) => Msize};
    line-height: ${({Mheight}) => Mheight};
    margin: ${({Mmargin}) => Mmargin};
    width: ${({Mwidth}) => Mwidth};
    left: ${({Mleft}) => Mleft};
    color: ${({Mcolor}) => Mcolor};
    font-weight: ${({Mweight}) => Mweight};
    border-bottom: ${({Mbb}) => Mbb};
    padding-bottom: ${({Mpb}) => Mpb};
  }
`

export const Image = styled.img`
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin: ${({margin}) => margin};
  object-fit: ${({fit}) => fit};

  ${media.mobile} {
    width: 100%;
    width: ${({Mwidth}) => Mwidth};
    height: ${({Mheight}) => Mheight};
    object-fit: ${({Mfit}) => Mfit};
  }
`

export const SubTitle = styled.p`
  margin: 0px;
  margin: ${({margin}) => margin};
  color: ${({color}) => color}; 
  font-size: ${({size}) => size};
  padding-top: ${({pt}) => pt};
  margin-top: ${({mt}) => mt};
  font-weight: ${({weight}) => weight};

  ${media.mobile} {
    text-align: ${({Mta}) => Mta}; 
  font-size: ${({Msize}) => Msize};
  }
`
export const SubLeadWrapper = styled.div`

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
  border-right: ${({br}) => br};
  min-height: 100px;
  padding-top: ${({pt}) => pt};
  width: 100%;

  ${media.mobile} {
      border-right: unset;
      border-bottom: 1px solid lightgray;
  }
`

// Sports section
// ==============
export const Flex = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  justify-content: ${({jc}) => jc};
  align-items: ${({ai}) => ai};
  grid-gap: 15px;
  grid-gap: ${({gg}) => gg};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  padding-top: ${({pt}) => pt};
  padding-bottom: ${({pb}) => pb};
  margin-bottom: ${({mb}) => mb};
  border-bottom: ${({bb}) => bb};
  border-top: ${({bt}) => bt};
  margin-top: ${({mt}) => mt};
  flex-direction: ${({fd}) => fd};
  width: ${({width}) => width};

  &:nth-child(1) {
      padding-top: 0px;         
  }
  &:nth-last-child(1) {
      border-bottom: unset;
  }

  ${media.mobile} {
    flex-direction: column;
    border-right: unset;
    border-bottom: 1px solid lightgray;
    flex-direction: ${({Mfd}) => Mfd};
    justify-content: ${({Mjc}) => Mjc};
    align-items: ${({Mai}) => Mai};
    grid-gap: 15px;
    grid-gap: ${({Mgg}) => Mgg};
    margin: ${({Mmargin}) => Mmargin};
    padding: ${({Mpadding}) => Mpadding};
    padding-top: ${({Mpt}) => Mpt};
    padding-bottom: ${({Mpb}) => Mpb};
    margin-bottom: ${({Mmb}) => Mmb};
    border-bottom: ${({Mbb}) => Mbb};
    border-top: ${({Mbt}) => Mbt};
    margin-top: ${({Mmt}) => Mmt};
    width: ${({Mwidth}) => Mwidth};
    display: ${({Mdisplay}) => Mdisplay};
    grid-template-columns: ${({Mgtc}) => Mgtc};
    flex-direction: ${({Mfd}) => Mfd};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({repeat}) => repeat}, 1fr);
  grid-gap: ${({gg}) => gg};
  width: ${({width}) => width};
  margin: ${({margin}) => margin};
  margin-top: ${({mt}) => mt};
  margin-bottom: ${({mb}) => mb};
  padding: ${({padding}) => padding};
  padding-top: ${({pt}) => pt};
  padding-bottom: ${({pb}) => pb};
  border-bottom: ${({bb}) => bb};
  border-top: ${({bt}) => bt};

  ${media.mobile} {
    grid-template-columns: repeat(${({Mrepeat}) => Mrepeat}, 1fr);
    grid-gap: ${({Mgg}) => Mgg};
    width: ${({Mwidth}) => Mwidth};
    margin: ${({Mmargin}) => Mmargin};
    margin-top: ${({Mmt}) => Mmt};
    margin-bottom: ${({Mmb}) => Mmb};
    padding: ${({Mpadding}) => Mpadding};
    padding-top: ${({Mpt}) => Mpt};
    padding-bottom: ${({Mpb}) => Mpb};
    border-bottom: ${({Mbb}) => Mbb};
    border-top: ${({Mbt}) => Mbt};
  }
`

export const Col = styled.div`
  width: 100%;
  padding: ${({padding}) => padding};
  width: ${({width}) => width};

  ${media.mobile} {
    padding: ${({Mpadding}) => Mpadding};
    width: ${({Mwidth}) => Mwidth};
  }
`
export const SportsContainer = styled.div`
  background: rgba(2, 130, 151, 0.1);
  border-bottom: 3px solid #39bed2; 
  width: 100%;
  height: auto;
`
export const SportsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
`
export const SportsBanner = styled.div`
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`
export const ImageThumb = styled.div`
  width: 100%;
  height: ${({height}) => height};
  object-fit: ${({fit}) => fit};
  overflow: hidden;
  width: ${({width}) => width};
  margin: ${({margin}) => margin};
  border-radius: ${({radius}) => radius};
  margin-bottom: ${({mb}) => mb};

  ${media.mobile} {
      height: ${({Mheight}) => Mheight};
      margin: ${({Mmargin}) => Mmargin}; 
      margin-bottom: ${({Mmb}) => Mmb}; 
      border-bottom: ${({Mbb}) => Mbb};
      width: ${({Mwidth}) => Mwidth};
      width: ${({Mfit}) => Mfit};

  }

  & img {
    width: 100%;
    height: 100%;

    ${media.mobile} {
      width: 100% !important;
      height: ${({Mheight}) => Mheight};
    }
  }
`
export const Div = styled.div`
  position: relative;
  margin-top: ${({mt}) => mt};
  margin-bottom: ${({mb}) => mb};
  padding: ${({padding}) => padding};
  padding-top: ${({pt}) => pt};
  padding-bottom: ${({pb}) => pb};
  width: ${({width}) => width};
  border: ${({border}) => border};
  border-top: ${({bt}) => bt};
  border-bottom: ${({bb}) => bb};
  border-left: ${({bLeft}) => bLeft};
  border-right: ${({bRight}) => bRight};
  background: ${({bg}) => bg};
  box-shadow: ${({bs}) => bs};

  ${media.mobile} {

    border: ${({border}) => border};
    border-bottom: ${({Mbb}) => Mbb};
    padding-bottom: ${({Mpb}) => Mpb};
    padding-top: ${({Mpt}) => Mpt};
    margin-bottom: ${({Mmb}) => Mmb};
    padding: ${({Mpadding}) => Mpadding};
    width: ${({Mwidth}) => Mwidth};
  }
`
export const SportsItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  list-style: none;
  position: relative;
  padding-bottom: 15px;
  padding-left: 30px;
  text-decoration: none;

  &:before{    
    content: " ";
    position: absolute;
    top: 6px;
    left: 0px;
    height: 20px;
    width: 20px;
    background: #39bed2;
    border-radius: 50%;
    border: 2px solid white;
  }
`

// Category Section
// ================
export const CategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  /* margin-top: 20px; */
  margin-bottom: 10px;
  margin-bottom: ${({mb}) => mb};
  margin-top: ${({mt}) => mt};
  padding-top: 20px;
`
export const CategoryTitleText = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 7px;
  font-weight: bold;
  color: ${({color}) => color};
`
export const CategoryTitleTextIcon = styled(BsChevronRight)`
  color: firebrick;
  margin-top: 2px;
`

// The world section
// =================
export const FlexNewsList = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid lightgray;
  &:nth-child(1) {
      padding-top: 0px;         
  }
  &:nth-last-child(1) {
      border-bottom: unset;
  }
`
export const BorderBottom = styled.div`
  width: 100%; 
  height: 1px;
  background: lightgray;
  margin: ${({margin}) => margin};
  margin-bottom: ${({mb}) => mb};

  ${media.mobile} {
    display: ${({Mdisplay}) => Mdisplay};
  }
`


// Opinion Section
// ================
export const TitleSpan = styled.span`
  color: white;
  background: #001246;
  line-height: ${({lh}) => lh};
  font-weight: bold;
  box-shadow: 10px 0 0 #001246, -10px 0 0 #001246;

  ${media.mobile} {
    line-height: ${({Mlh}) => Mlh};
  }
`
export const Underline = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #34b8b5;
  margin-bottom: 10px;
`

// Video Section
// =============
export const PlayIcon = styled(BsFillPlayCircleFill)`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  color: red;
  padding: 2px;
`
export const TitleContainer = styled.div`
  width: 1250px;
  margin: 0px auto;
  padding-top: 10px;
  padding-bottom: 5px;
`
// Photo gallery
// =============
export const GalleryThumb = styled.div`
  width: 100%;
  height: ${({height}) => height};
  overflow: hidden;

  ${media.mobile} {
    height: ${({Mheight}) => Mheight};
  }

  & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;

      &:hover {
          transform: scale(1.04);
          z-index: 0;
      }
  }
`
export const GalleryIcon = styled(FaImages)`
  position: absolute;
  left: 20px;
  right: 20px;
  top: 20px;
  font-size: 40px;
  border-radius: 5px;
  background: #ffffffcf;
  padding: 5px;
  z-index: 1;
`
export const FeaturedContent = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  bottom: 0px;
  font-weight: bold;
  color: white;
  padding: 20px;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #ffffff00 , black);
`
export const GridTwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

// Footer section
// =============
export const VersionWrapper = styled.div`
    transition: all 0.3s ease-in-out;
    margin-top: 10px;
` 
export const VersionTitle = styled.ul`
  font-size: 22px;
  list-style: none;
  margin: 0px;
  position: relative;
  cursor: pointer;
`
export const VersionItem = styled.li`
    list-style: none;
    padding: 4px 0px;
    width: max-content;
    display: flex;
    justify-content: flex-start;
    grid-gap: 10px;
    font-size: 18px;
`
export const RadioButtonChecked = styled(CgRadioChecked)`
font-size: 22px;
`
export const RadioButton = styled(CgRadioCheck)`
  font-size: 22px;
`
export const FooterMenuWrap = styled.ul`
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(${({repeat}) => repeat}, 1fr);
  grid-column-gap: 20px;
`
export const FooterMenuItem = styled.li`
  font-size: 18px;
  list-style: none;
  padding-bottom: 20px;
  color: #2b2b2b;
`
export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  ${media.mobile} {
    flex-direction: column;
    justify-content: center;
  }
`
export const SocialIcon = styled.div`
  font-size: 22px;
  margin-left: 10px;
  color: black;
  transition: all 0.3s ease-in-out;
  background-color: rgb(238, 238, 238);
  padding: 5px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center; 

  &:hover {
    transform: translateY(-3px);
  }
`
export const FacebookIcon = styled(FaFacebookSquare)`
  /* font-size: 19px; */
`
export const TwitterIcon = styled(FaTwitter)`
  /* font-size: 19px; */
`
export const InstagramIcon = styled(FaInstagram)`
  /* font-size: 19px; */
`
export const YoutubeIcon = styled(FaYoutube)`
  /* font-size: 19px; */
`
