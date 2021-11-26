import React from "react";
import {
  A,
  ATag,
  Div,
  FlexNewsList,
  Image,
  ImageThumb,
  MobileHide,
  NewsTitle,
  SubTitle,
} from "../Styled/Home.Styled";

function SubFeatured({news}) {
  return (
    <>
      <FlexNewsList>

        <Div width="60%">
          <NewsTitle size="25px">
            <A href="/single" passHref>
              <ATag>{news.Title}</ATag>
            </A>
          </NewsTitle>
          <MobileHide>
            <SubTitle size="18px">
              <A href="/single" passHref>
                <ATag>{news.Desc}</ATag>
              </A>
            </SubTitle>
          </MobileHide>
          <SubTitle mt="5px" color="gray">{news.Date}</SubTitle>
        </Div>

        <ImageThumb width="50%" Mwidth="40%" height="150px" Mheight="100px" >
          <A href="/single" passHref>
            <ATag>
              <Image Mfit="cover" src={news.Thumb} alt={news.Title} />
            </ATag>
          </A>
        </ImageThumb>

      </FlexNewsList>
    </>
  );
}

export default SubFeatured;
