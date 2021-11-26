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
} from "../Styled/Home.Styled";

function Items(props) {
  return (
    <>
      <Div width="100%">
        <Flex fd="column">
          <ImageThumb height="200px" fit="cover" Mwidth="100%">
            <A href="/single" passHref>
              <ATag>
                <Image src={props.Thumb} alt={props.Title} />
              </ATag>
            </A>
          </ImageThumb>

          <Div mt="10px" Mwidth="100%">
            <A href="/single" passHref>
              <ATag>
                <NewsTitle size="23px">{props.Title}</NewsTitle>
              </ATag>
            </A>

            <SubTitle size="17px" color="gray">
              {props.Date}
            </SubTitle>
          </Div>
        </Flex>
      </Div>
    </>
  );
}

export default Items;
