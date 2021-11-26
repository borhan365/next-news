import React from "react";
import {
  A,
  ATag,
  Div,
  Flex,
  Image,
  ImageThumb,
  MobileHide,
  NewsTitle,
  SubTitle,
} from "../../Styled/Home.Styled";

function Items(props) {
  return (
    <>
      <Flex fd="column" Mfd="row" Mwidth="100%" gg="0px">
        <ImageThumb height="180px" Mheight="100px" Mwidth="300px" fit="cover">
          <A href="/single" passHref>
            <ATag>
              <Image src={props.Thumb} Mfit="cover" alt={props.Title} />
            </ATag>
          </A>
        </ImageThumb>

        <Div mt="10px" Mwidth="100%">
          <A href="/single" passHref>
            <ATag>
              <NewsTitle size="23px">{props.Title}</NewsTitle>

              <MobileHide>
              <SubTitle size="17px" color="gray">
                {props.Desc}
              </SubTitle>
              </MobileHide>
            </ATag>
          </A>

          <SubTitle size="17px" color="gray">
            {props.Date}
          </SubTitle>
        </Div>
      </Flex>
    </>
  );
}

export default Items;
