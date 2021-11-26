import React from "react";
import { A, ATag, Div, NewsTitle, SubTitle } from "../../Styled/Home.Styled";

function HeroSecondSectionNews({ news }) {
  return (
    <>
      <Div key={news._id} Mbb="1px solid lightgray" Mpb="10px">
        <A href="/single" passHref>
          <ATag>
            <NewsTitle size="21px">{news.title}</NewsTitle>
            <SubTitle>{news.subTitle}</SubTitle>
            <SubTitle>{news.time}</SubTitle>
          </ATag>
        </A>
      </Div>
    </>
  );
}

export default HeroSecondSectionNews;
