import React from "react";
import { A, ATag, Image, NewsTitle, StyledFlexNews, SubTitle } from "../Styled/Home.Styled";

function FlexNews({ news }) {
  return (
    <StyledFlexNews pt="10px">
      <div>
          <A href="/single" passHref>
            <ATag>
              <Image src={news.Img} alt="flex alt"/>
        </ATag>
        </A>
      </div>
      <div>
        <NewsTitle size="18px" height="23px">
          <A href="/single" passHref>
            <ATag>
            {news.Title}
            </ATag>
          </A>
        </NewsTitle>
        <SubTitle>{news.Time}</SubTitle>
      </div>
    </StyledFlexNews>
  );
}

export default FlexNews;
