import React from "react";
import {
  A,
  ATag,
  Div,
  Image,
  ImageThumb,
  NewsTitle,
  SubTitle,
} from "../Styled/Home.Styled";

function Items({ news }) {
  return (
    <>
      <Div width="100%">
        <ImageThumb height="200px" fit="cover">
          <A href="/single" passHref>
            <ATag>
              <Image src={news.Thumb} alt={news.Title} />
            </ATag>
          </A>
        </ImageThumb>

        <Div mt="10px">
          <A href="/single" passHref>
            <ATag>
              <NewsTitle size="23px">{news.Title}</NewsTitle>
            </ATag>
          </A>

          <SubTitle size="17px" color="gray">
            {news.Date}
          </SubTitle>
        </Div>
      </Div>
    </>
  );
}

export default Items;
