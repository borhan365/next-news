import React from "react";
import {
  A,
  ATag,
  Div,
  FeaturedContent,
  GalleryIcon,
  GalleryThumb,
  NewsTitle,
} from "../../Styled/Home.Styled";

function Items(props) {
  return (
    <>
        <Div>
          <GalleryIcon />

          {/* Thumb */}
          <GalleryThumb height="245px">
            <A href="/single" passHref>
              <ATag>
                <img src={props.Thumb} alt={props.Title} />
              </ATag>
            </A>
          </GalleryThumb>

          {/* Title */}
          <FeaturedContent>
            <NewsTitle size="20px">
              <A href="/single" passHref>
                <ATag color="white">{props.Title}</ATag>
              </A>
            </NewsTitle>
          </FeaturedContent>
        </Div>
    </>
  );
}

export default Items;
