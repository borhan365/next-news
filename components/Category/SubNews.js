import React from "react";
// import Image from 'next/image'
import Data from "./Data";
import {
  Flex,
  Div,
  A,
  ATag,
  Image,
  NewsTitle,
  SubTitle,
} from "../../components/Styled/Home.Styled";

function SubNews() {
  return (
    <>
      {Data.slice(0, 2).map((news) => (
        <Flex pt="10px" fd="column" Mfd="row">
          <Div>
            <A href="/single" passHref>
              <ATag>
                <Image width="100%" Mwidth="0px" height="180px" Mheight="110px" src={news.Img} />
              </ATag>
            </A>
          </Div>
          <Div Mwidth="70%">
            <NewsTitle size="20px" height="24px">
              <A href="/single" passHref>
                <ATag>{news.Title}</ATag>
              </A>
            </NewsTitle>
            <SubTitle>{news.Time}</SubTitle>
          </Div>
        </Flex>
      ))}
    </>
  );
}

export default SubNews;
