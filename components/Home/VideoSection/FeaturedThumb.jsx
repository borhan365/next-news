import React from "react";
import { Div, Image, ImageThumb, PlayIcon } from "../../Styled/Home.Styled";

function Featured(props) {
  return (
    <>
      <Div>
        <PlayIcon />
        <ImageThumb>
          <Image src={props.Thumb} alt={props.Title} />
        </ImageThumb>
      </Div>
    </>
  );
}

export default Featured;
