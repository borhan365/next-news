import React, { useEffect } from "react";
import { Container, Div, Flex, MaxContainer } from "../Styled/Home.Styled";
import Data from './Data';
import ExcerptArea from "./ExcerptArea";
import RelatedPosts from "./RelatedPosts";
import ThumbAndContent from "./ThumbAndContent";

function Single() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <MaxContainer>
      <Div mt="20px" Mmt="0px">
        <ExcerptArea />
        <ThumbAndContent />
      </Div>
      </MaxContainer>
      <Container>
        <Flex gg="20px" pb="5px">
          {
              Data.map((news) => (
                <RelatedPosts news={news} key={news._id} />
              ))
          }
        </Flex>
      </Container>
    </>
  );
}

export default Single;
