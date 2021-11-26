import React from "react";
import Items from "./Items";
import Content from "./Content";
import {
  BorderBottom,
  CategoryTitle,
  CategoryTitleText,
  CategoryTitleTextIcon,
  Flex,
} from "../../Styled/Home.Styled";

function CapitalSection() {
  return (
    <>
        {/* Title */}
        <CategoryTitle>
          <CategoryTitleText>
            রাজধানী <CategoryTitleTextIcon />
          </CategoryTitleText>
        </CategoryTitle>

      <Flex>
          {Content.slice(0, 4).map((val, index) => {
            return (
              <Items
                key={index}
                Title={val.Title}
                Desc={val.Desc}
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

export default CapitalSection;
