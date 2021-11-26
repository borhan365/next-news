import React from "react";
import {
  A,
  ATag,
  Div,
  Image,
  ImageThumb,
  NewsTitle,
  SubTitle,
} from "../../Styled/Home.Styled";

function Featured(props) {
  return (
    <>
      <Div>
        <ImageThumb>          
          <A href="/single" passHref>
            <ATag>
              <Image src={props.Thumb} alt={props.Title} />  
            </ATag>
          </A>
        </ImageThumb>

        <Div mt="8px">
          <NewsTitle size="35px" height="40px">
            <A href="/single" passHref>
              <ATag>{props.Title}</ATag>
            </A>
          </NewsTitle>
          <SubTitle>
            <A href="/single" passHref>
              <ATag>{props.Desc}</ATag>
            </A>
          </SubTitle>
          <SubTitle pt="5px">{props.Date}</SubTitle>
        </Div>
      </Div>
    </>
  );
}

export default Featured;
