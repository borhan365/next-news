import React from "react";
import {
  CategoryTitle,
  CategoryTitleText,
  CategoryTitleTextIcon,
  Col,
  Container,
  Flex,
  Section,
  TitleContainer,
  VideoContainer,
} from "../../Styled/Home.Styled";
import Data from "./Date";
import FeaturedContent from "./FeaturedContent";
import Featured from "./FeaturedThumb";
import Items from "./Items";
import ItemsData from "./ItemsData";

function VideoSection() {
  return (
    <>
      <Section>
        <Container>
          {/* Title */}
          <CategoryTitle mb="5px">
            <CategoryTitleText color="white">
              ভিডিও নিউজ <CategoryTitleTextIcon />
            </CategoryTitleText>
          </CategoryTitle>
          <Flex>
            {/* Sub-Featured News */}
            <Col width="40%" Mwidth="100%">
              {Data.map((val, index) => {
                return (
                  <FeaturedContent
                    key={index}
                    Title={val.Title}
                    Desc={val.Desc}
                    Date={val.Date}
                  />
                );
              })}
            </Col>

            {/* Featured news */}
            <Col width="60%" Mwidth="100%">
              {Data.map((val, index) => {
                return <Featured key={index} Thumb={val.Thumb} />;
              })}
            </Col>
          </Flex>

          <Flex gg="15px" pt="10px">
            {ItemsData.slice(0, 4).map((val, index) => {
              return (
                <Items key={index} Thumb={val.Thumb} Title={val.Title} Date={val.Date} />
              );
            })}
          </Flex>
        </Container>
      </Section>
    </>
  );
}

export default VideoSection;
