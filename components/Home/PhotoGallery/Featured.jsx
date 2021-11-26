import React from "react";
import {
  Div,
  FeaturedContent,
  GalleryIcon,
  GalleryThumb,
  Image,
  NewsTitle,
} from "../../Styled/Home.Styled";

function Featured(props) {
  return (
    <>
      <Div>
        <GalleryIcon />

        {/* Thumb */}
        <GalleryThumb height="500px" Mheight="400px">
          <Image fit="cover" src={props.Thumb} alt={props.Title} />
        </GalleryThumb>

        {/* Title and Date */}
        <FeaturedContent>
          <NewsTitle>{props.Title}</NewsTitle>
        </FeaturedContent>
      </Div>
    </>
  );
}

export default Featured;
