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
} from "../../Styled/Home.Styled";

function SubFeatured(props) {
  return (
    <>
      <FlexNewsList>
        <ImageThumb width="50%" height="150px" Mheight="100px">
          <A href="/single" passHref>
            <ATag>
              <Image src={props.Thumb} alt={props.Title} />
            </ATag>
          </A>
        </ImageThumb>

        <Div width="100%">
          <NewsTitle>
            <A href="/single" passHref>
              <ATag>{props.Title}</ATag>
            </A>
          </NewsTitle>
          <MobileHide>
            <SubTitle>
              <A href="/single" passHref>
                <ATag>{props.Desc}</ATag>
              </A>
            </SubTitle>
          </MobileHide>
          <SubTitle>{props.Date}</SubTitle>
        </Div>
      </FlexNewsList>
    </>
  );
}

export default SubFeatured;
