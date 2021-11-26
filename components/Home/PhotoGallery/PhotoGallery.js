import React from "react";
import {
  CategoryTitle,
  CategoryTitleText,
  CategoryTitleTextIcon,
  Col,
  Flex,
  GridTwoColumn,
} from "../../Styled/Home.Styled";
import Featured from "./Featured";
import FeaturedContent from "./FeaturedContent";
import Items from "./Items";
import ItemsContent from "./ItemsContent";

function PhotoGallery() {
  return (
    <>
      {/* Title */}
      <CategoryTitle mb="5px">
        <CategoryTitleText>
          ছবিঘর <CategoryTitleTextIcon />
        </CategoryTitleText>
      </CategoryTitle>

      <Flex mb="30px">
        {/* Featured Section */}
        <Col width="50%" Mwidth="100%">
          {FeaturedContent.map((val, index) => {
            return <Featured key={index} Title={val.Title} Thumb={val.Thumb} />;
          })}
        </Col>

        {/* Right */}
        <Col width="50%" Mwidth="100%">
          <GridTwoColumn>
            {ItemsContent.map((val, index) => {
              return <Items key={index} Title={val.Title} Thumb={val.Thumb} />;
            })}
          </GridTwoColumn>
        </Col>
      </Flex>
    </>
  );
}

export default PhotoGallery;
