import React from 'react'
import { A, ATag, SubTitle } from '../../Styled/Global.Styled'
import { Div, ImageThumb } from '../../Styled/Home.Styled'


const thumb = "https://images.prothomalo.com/prothomalo-bangla%2F2021-10%2F2fada22c-dec3-4e24-9b16-28a7052e680f%2Ffarmer_protest_.png?rect=0%2C0%2C1200%2C800&auto=format%2Ccompress&fmt=webp&format=webp&w=320&dpr=1.0"

function LeadNewsThumbnail() {
  return (
    <>
      <Div>
        <ImageThumb>
      <A href="/single" passHref>
          <ATag>
            <img src={thumb} alt="Leadnews" />
          </ATag>
      </A>
      </ImageThumb>
      <SubTitle color="gray" size="14px">নোয়াখালীর ভাসানচরে রোহিঙ্গাদের জন্য পাকা ঘর তৈরিসহ নানা সুযোগ-সুবিধার ব্যবস্থা করা হয়েছে | ফাইল ছবি: প্রথম</SubTitle>
      </Div>
    </>
  )
}

export default LeadNewsThumbnail
