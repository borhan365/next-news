import Image from "next/image";
import React from "react";
import {
  Col,
  Div,
  FacebookIcon,
  Flex,
  InstagramIcon,
  NewsTitle,
  SocialIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../Styled/Home.Styled";
import AppleStore from "./Image/apple.jpg";
import GooglePlay from "./Image/play.png";

function SecondSection() {
  return (
    <>
      <Flex padding="20px 0px">
        <Col width="50%" Mwidth="100%">
          <Flex jc="flex-start" Mfd="row" Mjc="center" Mai="center">
            <NewsTitle size="17px" weight="normal" color="gray">
              শেয়ার করুন: &nbsp;
            </NewsTitle>
            <SocialIcon>
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon>
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon>
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon>
              <YoutubeIcon />
            </SocialIcon>
          </Flex>
        </Col>

        {/* Right side */}
        <Col width="50%" Mwidth="100%">
          <Flex
            ai="center"
            jc="flex-end !important"
            Mfd="column"
            Mjc="center"
            Mai="center"
            Mgg="4px"
          >
            <NewsTitle size="18px" color="gray" weight="normal">
              অ্যাপস ডাউনলোড করুন: &nbsp;
            </NewsTitle>
            <Div>
              <Image
                width="140px"
                height="40px"
                src={GooglePlay}
                alt="Play store"
              />
              <Image
                width="140px"
                height="40px"
                src={AppleStore}
                alt="Apple store"
              />
            </Div>
          </Flex>
        </Col>
      </Flex>
    </>
  );
}

export default SecondSection;
