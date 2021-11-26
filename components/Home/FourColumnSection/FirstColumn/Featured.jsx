import React from "react";
import {
  A,
  ATag,
  Div,
  Image,
  ImageThumb,
  NewsTitle,
} from "../../../Styled/Home.Styled";

function Featured(props) {
  return (
    <>
      <Div>
        <ImageThumb width="100%" height="180px" Mheight="230px">
          <A href="/single" passHref>
            <ATag>
              <Image fit="cover" src={props.Thumb} alt={props.Title} />
            </ATag>
          </A>
        </ImageThumb>

        <Div mt="8px">
          <NewsTitle size="22px" height="30px">
            <A href="/single" passHref>
              <ATag>{props.Title}</ATag>
            </A>
          </NewsTitle>
        </Div>
      </Div>
    </>
  );
}

export default Featured;
