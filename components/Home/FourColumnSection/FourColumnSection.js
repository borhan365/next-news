import React from "react";
import { BorderBottom, Col, Flex } from "../../Styled/Home.Styled";
import FirstColumn from "./FirstColumn/FirstColumn";
import FourthColumn from "./FourthColumn/FourthColumn";
import SecondColumn from "./SecondColumn/SecondColumn";
import ThirdColumn from "./ThirdColumn/ThirdColumn";

function FourColumnSection() {
  return (
    <>
      <Flex mt="10px" Mmt="0px" bt="1px solid lightgray" Mgg="0px">
        {/* First Columns */}
        <Col>
          <FirstColumn />
        </Col>

        {/* Second Columns */}
        <Col>
          <SecondColumn />
        </Col>

        {/* Third Columns */}
        <Col>
          <ThirdColumn />
        </Col>

        {/* Fourth Columns */}
        <Col>
          <FourthColumn />
        </Col>
      </Flex>
    </>
  );
}

export default FourColumnSection;
