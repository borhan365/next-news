import React from "react";
import {
  A,
  ATag,
  Div,
  Flex,
  Image,
  ImageThumb,
  NewsTitle,
  SubTitle,
} from "../../Styled/Home.Styled";

function Items(props) {
  return (
    <>
      <Flex mb="10px" bb="1px solid lightgray" pb="10px" Mfd="row">
        <ImageThumb width="50%" height="90px">
          <A href="/single" passHref>
            <ATag>
              <Image src={props.Thumb} alt={props.Title} />
            </ATag>
          </A>
        </ImageThumb>

        <Div width="100%">
          <NewsTitle size="20px" height="30px">
            <A href="/single" passHref>
              <ATag>{props.Title}</ATag>
            </A>
          </NewsTitle>
          <SubTitle>
            <A href="/single" passHref>
              <ATag>{props.Desc}</ATag>
            </A>
          </SubTitle>
          <SubTitle pt="0px">{props.Date}</SubTitle>
        </Div>
      </Flex>
    </>
  );
}

export default Items;
