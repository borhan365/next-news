import React from "react";
import {
  A,
  ATag,
  BorderBottom,
  Col,
  Div,
  Flex,
  FooterMenuItem,
  FooterMenuWrap,
  Image,
  ImageThumb,
  MobileHide,
  RadioButton,
  RadioButtonChecked,
  VersionItem,
  VersionWrapper,
} from "../../components/Styled/Home.Styled";

const Logo =
  "https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg";

function FirstSection() {
  return (
    <>
      <Flex pt="40px !important" Mpt="0px" pb="40px"  gg="45px" Mgg="0px" Mpt="10px !important" Mpb="20px" >
        {/* First column */}
        <Col width="20%" Mwidth="100%">
          {/* logo */}
          <ImageThumb width="200px" Mmargin="0px auto" Mmb="20px" Mbb="1px solid lightgray">
            <A href="/" passHref>
              <ATag>
                <Image src={Logo} alt="footer logo" />
              </ATag>
            </A>
          </ImageThumb>

          <MobileHide>
          <VersionWrapper>
            <VersionItem>
              <A href="/" passHref>
                <ATag>
                  <RadioButtonChecked /> বাংলা
                </ATag>
              </A>
            </VersionItem>
            <VersionItem>
              <A href="/" passHref>
                <ATag>
                  <RadioButton /> ইংরেজি বাংলা
                </ATag>
              </A>
            </VersionItem>
            <VersionItem>
              <A href="/" passHref>
                <ATag>
                  <RadioButton /> উত্তর আমেরিকা বাংলা
                </ATag>
              </A>
            </VersionItem>
          </VersionWrapper>
          </MobileHide>
        </Col>

        {/* Second column */}
        <Col width="50%" Mwidth="100%">
          <Div
            bLeft="1px solid lightgray"
            MbLeft="unset"
            padding="0px 20px"
            Mpadding="unset"
            bRight="1px solid lightgray"
            border="none"
            Mbb="1px solid lightgray"
            Mmb="10px"
          >
            <FooterMenuWrap repeat="3" Mgg="10px">
              <FooterMenuItem>বিশেষ সংখ্যা</FooterMenuItem>
              <FooterMenuItem>গোলটেবিল</FooterMenuItem>
              <FooterMenuItem>অন্য আলো</FooterMenuItem>
              <FooterMenuItem>কিশোর আলো</FooterMenuItem>
              <FooterMenuItem>বিজ্ঞানচিন্তা</FooterMenuItem>
              <FooterMenuItem>প্রতিচিন্তা</FooterMenuItem>
              <FooterMenuItem>প্রথমা</FooterMenuItem>
              <FooterMenuItem>বন্ধুসভা</FooterMenuItem>
              <FooterMenuItem>প্রথম আলো ট্রাস্ট</FooterMenuItem>
              <FooterMenuItem>এবিসি রেডিও</FooterMenuItem>
              <FooterMenuItem>মোবাইল ভ্যাস</FooterMenuItem>
              <FooterMenuItem>নাগরিক সংবাদ</FooterMenuItem>
            </FooterMenuWrap>
          </Div>
        </Col>

        {/* third column */}
        <MobileHide>
        <Col width="100%" Mwidth="100%">
          <Div>
            <FooterMenuWrap repeat="2">
              <FooterMenuItem>প্রথম আলো</FooterMenuItem>
              <FooterMenuItem>বিজ্ঞাপন</FooterMenuItem>
              <FooterMenuItem>সার্কুলেশন</FooterMenuItem>
              <FooterMenuItem>কিশোর আলো</FooterMenuItem>
              <FooterMenuItem>নীতিমালা</FooterMenuItem>
              <FooterMenuItem>গোপনীয়তা নীতি</FooterMenuItem>
              <FooterMenuItem>যোগাযোগ</FooterMenuItem>
            </FooterMenuWrap>
          </Div>
        </Col>
        </MobileHide>
      </Flex>
      <BorderBottom />
    </>
  );
}

export default FirstSection;
