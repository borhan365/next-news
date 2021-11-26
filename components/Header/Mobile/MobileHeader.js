import React from "react";
import {
  A,
  ATag,
  DesktopHide,
  Div,
  Flex,
  Image,
} from "../../Styled/Home.Styled";
import { BurgerMenu, SearchIcon } from "../Header.styled";

function MobileHeader() {
  return (
    <>
      <DesktopHide>
        <Div bg="white" bs="0px 0px 10px 0px lightgray" padding="15px 20px" mb="15px">
          <Flex Mfd="row" jc="space-between" ai="center" width="100%">
            <Div width="20px">
              <BurgerMenu />
            </Div>
            <Div width="200px">
              <A href="/" passHref>
                <ATag>
                <Image width="100%" margin="0px auto" src="https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg" alt="mobile logo" />
                </ATag>
              </A>
            </Div>
            <Div width="20px">
              <SearchIcon />
            </Div>
          </Flex>
        </Div>
      </DesktopHide>
    </>
  );
}

export default MobileHeader;
