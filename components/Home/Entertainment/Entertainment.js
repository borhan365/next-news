import React from "react";
import {
    BorderBottom,
    CategoryTitle,
    CategoryTitleText,
    CategoryTitleTextIcon,
    Col,
    Div,
    Flex,
    MobileHide
} from "../../Styled/Home.Styled";
import FeatureContent from "./FeatureContent";
import Featured from "./Featured";
import ItemContent from "./ItemContent";
import Items from "./Items";

function Entertainment() {
  return (
    <>
      <Div>
        {/* Title */}
        <CategoryTitle mb="5px">
          <CategoryTitleText>
            বিনোদন <CategoryTitleTextIcon />
          </CategoryTitleText>
        </CategoryTitle>

        <Flex>
          {/* Sub-Featured News */}
          <Col>
          <MobileHide>
            {ItemContent.map((val, index) => {
              return (
                <Items
                  key={index}
                  Title={val.Title}
                  Thumb={val.Thumb}
                  Desc={val.Desc}
                  Date={val.Date}
                />
              );
            })}
          </MobileHide>
          </Col>

          {/* Featured news */}
          <Col>
            {FeatureContent.map((val, index) => {
              return (
                <Featured
                  key={index}
                  Title={val.Title}
                  Thumb={val.Thumb}
                  Desc={val.Desc}
                  Date={val.Date}
                />
              );
            })}
          </Col>

          {/* Sub-Featured News */}
          <Col>
            {ItemContent.map((val, index) => {
              return (
                <Items
                  key={index}
                  Title={val.Title}
                  Thumb={val.Thumb}
                  Desc={val.Desc}
                  Date={val.Date}
                />
              );
            })}
          </Col>
        </Flex>
      </Div>
      <BorderBottom />
    </>
  );
}

export default Entertainment;
