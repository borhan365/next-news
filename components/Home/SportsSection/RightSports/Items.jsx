import React from "react";
import Content from "./Content";
import { A, ATag, SportsItem } from "../../../Styled/Home.Styled";

function Items() {
  return (
    <>
    <div>
      {Content.map((val) => {
        return (
            <SportsItem>
              <A href="/single" passHref>
                <ATag>
              {val.Title}
                </ATag>
              </A>
            </SportsItem>
        );
      })}
    </div>
    </>
  );
}

export default Items;
