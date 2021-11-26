import React from "react";
import { A, ATag } from "../../Styled/Home.Styled";
import {
  MenuHeaderContainer,
  MenuHeaderSectionStyled,
  MenuLink,
  MenuWrapper,
} from "../Header.styled";
import categories from './MenuData'

function MenuHeaderSection() {
  return (
    <MenuHeaderSectionStyled>
      <MenuHeaderContainer>
        <MenuWrapper>
            {
              categories.map(val => {
                return(
                  <MenuLink>
              <A href="/category" passHref>
                  <ATag> {val.name} </ATag>
              </A>
            </MenuLink>
                )
              })
            }
            
        </MenuWrapper>
      </MenuHeaderContainer>
    </MenuHeaderSectionStyled>
  );
}

export default MenuHeaderSection;
