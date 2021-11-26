import React from "react";
import {
  A,
  ATag,
  Div,
  Image,
  ImageThumb,
  NewsTitle,
  SubTitle
} from "../Styled/Home.Styled";

function Featured() {
  return (
    <>
      <Div>
        <ImageThumb>    
            <A href="/single" passHref>
              <ATag>
                <Image src="https://images.prothomalo.com/prothomalo-bangla%2F2021-06%2Feebe3e04-74ce-4db3-b8e8-eb846e32c187%2FHelicopter_carrying_Colombia_s_President.jpg?rect=0%2C37%2C1024%2C576&auto=format%2Ccompress&fmt=webp&format=webp&w=610&dpr=1.0" alt="alt" />  
            </ATag>
          </A>
        </ImageThumb>

        <Div mt="8px">
          <NewsTitle size="35px" height="40px">
            <A href="/single" passHref>
              <ATag>কৃষক বিক্ষোভে গাড়ি উঠিয়ে হত্যায় ভারতের রাজনীতিতে উত্তাপ</ATag>
            </A>
          </NewsTitle>
          <SubTitle size="19px">
            <A href="/single" passHref>
              <ATag>ভারতের কেন্দ্রীয় স্বরাষ্ট্র প্রতিমন্ত্রী অজয় কুমার মিশ্রর বাড়ি উত্তর প্রদেশের লাখিমপুর খেরিতে। গত রোববার সেখানে প্রতিমন্ত্রীর একটি অনুষ্ঠানে</ATag>
            </A>
          </SubTitle>
          <SubTitle pt="5px" color="gray">২০ মিনিট আগে</SubTitle>
        </Div>
      </Div>
    </>
  );
}

export default Featured;
