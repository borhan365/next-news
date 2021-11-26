import React from "react";
import { A, ATag, Div, Image, ImageThumb, NewsTitle, StyledFlexNews, SubTitle } from "../../Styled/Home.Styled";

function FlexNews({ news }) {
  return (
    <StyledFlexNews pt="10px" key={news._id} br="1px solid lightgray">
      <ImageThumb width="40%">
          <A href="/single" passHref>
            <ATag>
        <Image src={news.Img} />
        </ATag>
        </A>
      </ImageThumb>
      <Div width="60%">
        <NewsTitle size="18px" height="23px">
          <A href="/single" passHref>
            <ATag>
            {news.Title}
            </ATag>
          </A>
        </NewsTitle>
        <SubTitle>{news.Time}</SubTitle>
      </Div>
    </StyledFlexNews>
  );
}

export default FlexNews;
