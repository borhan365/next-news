import React from "react";
import {
  BorderBottom, Flex
} from "../Styled/Home.Styled";
import Content from "./Content";
import Items from "./Items";

function SecondSection() {
  return (
    <>

      <Flex Mfd="row">
          {Content.slice(0, 3).map((val) => {
            return (
              <Items
                key={val._id}
                Title={val.Title}
                Thumb={val.Thumb}
                Date={val.Date}
              />
            );
          })}
      </Flex>
      <BorderBottom margin="10px 0px" />
    </>
  );
}

export default SecondSection;
