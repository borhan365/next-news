import React from 'react'
import { A, ATag, NewsTitle, SubLeadWrapper, ImageThumb, SubTitle } from '../../Styled/Home.Styled'

function SubLeadNews() {
  return (
    <>
      <SubLeadWrapper>
        <NewsTitle size="25px">
          <A href="/single" passHref>
            <ATag>
            কৃষক বিক্ষোভে গাড়ি উঠিয়ে হত্যায় ভারতের রাজনীতিতে উত্তাপ
            </ATag>
          </A>
        </NewsTitle>
        <SubTitle margin="0px 0px 7px 0px">ভারতের কেন্দ্রীয় স্বরাষ্ট্র প্রতিমন্ত্রী অজয় কুমার মিশ্রর বাড়ি উত্তর প্রদেশের লাখিমপুর খেরিতে। গত রোববার সেখানে প্রতিমন্ত্রীর একটি অনুষ্ঠানে</SubTitle>
        <ImageThumb>
        <A href="/single">
          <ATag>
          <img className="MobileHide" src="https://www.prothomalo.com/widgets/muktijuddho-50/images/banner.png?v=1" alt="ads" />
          </ATag>
        </A>
        </ImageThumb>
      </SubLeadWrapper>
    </>
  )
}

export default SubLeadNews
