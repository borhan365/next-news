import React from "react";
import {
  A,
  ATag,
  Div,
  Flex,
  Image,
  ImageThumb,
  NewsTitle,
  PlayIcon,
  SubTitle,
} from "../../Styled/Home.Styled";

function Items(props) {
  return (
    <>
      <Flex fd="column" Mfd="row">
        <PlayIcon />
        <ImageThumb width="100%" Mwidth="100%" height="190px" Mheight="130px">
          <Image Mfit="cover" src={props.Thumb} alt={props.Title} />
        </ImageThumb>
        <Div mt="10px" Mwidth="100%">
          <NewsTitle size="20px">
            <A href="/single" passHref>
              <ATag color="white">{props.Title}</ATag>
            </A>
          </NewsTitle>
          <SubTitle size="18px">
            <A href="/single" passHref>
              <ATag color="gray">{props.Date}</ATag>
            </A>
          </SubTitle>
        </Div>
      </Flex>
    </>
  );
}

export default Items;
