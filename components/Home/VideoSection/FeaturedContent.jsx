import React from "react";
import { Div, NewsTitle, SubTitle } from "../../Styled/Home.Styled";

function SubFeatured(props) {
  return (
    <>
      <Div>
        <NewsTitle size="40px" mt="10px" color="white">
          {props.Title}
        </NewsTitle>
        <SubTitle size="22px" height="27px" color="#bebebe">
          {props.Desc}
        </SubTitle>
        <SubTitle size="17px" color="lightgray" mt="10px">
          {props.Date}
        </SubTitle>
      </Div>
    </>
  );
}

export default SubFeatured;
