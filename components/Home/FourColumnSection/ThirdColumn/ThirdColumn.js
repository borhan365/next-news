import React from "react";
import {
  CategoryTitle,
  CategoryTitleText,
  CategoryTitleTextIcon,
  Div,
} from "../../../Styled/Home.Styled";
import FeatureContent from "./FeatureContent";
import Featured from "./Featured";
import ItemContent from "./ItemContent";
import Items from "./Items";

function ThirdColumn() {
  return (
    <>
      <Div>
        {/* Title */}
        <CategoryTitle mb="5px">
          <CategoryTitleText>
            বিশ্বজুড়ে <CategoryTitleTextIcon />
          </CategoryTitleText>
        </CategoryTitle>

        {/* Featured News */}
        <Div>
          {FeatureContent.map((val, index) => {
            return <Featured key={index} Title={val.Title} Thumb={val.Thumb} />;
          })}
        </Div>

        {/* List News */}
        <Div>
          {ItemContent.map((val, index) => {
            return <Items key={index} Title={val.Title} />;
          })}
        </Div>
      </Div>
    </>
  );
}

export default ThirdColumn;
