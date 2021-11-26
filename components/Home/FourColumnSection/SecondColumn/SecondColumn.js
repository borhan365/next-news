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

function SecondColumn() {
  return (
    <>
      <Div>
        {/* Title */}
        <CategoryTitle mb="5px">
          <CategoryTitleText>
            শিক্ষা<CategoryTitleTextIcon />
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

export default SecondColumn;
