import React from "react";
import { A, ATag, Div, NewsTitle } from "../../../Styled/Home.Styled";

function Items(props) {
  return (
    <>
      <Div bt="1px solid lightgray" padding="5px 0px">
        <NewsTitle size="19px" weight="normal">
          <A href="/single" passHref>
            <ATag>{props.Title}</ATag>
          </A>
        </NewsTitle>
      </Div>
    </>
  );
}

export default Items;
