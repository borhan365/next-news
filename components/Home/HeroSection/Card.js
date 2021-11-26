import React from 'react'
import { A, ATag, Image, NewsTitle, SubTitle } from '../../Styled/Home.Styled'

function Card({news}) {
  return (
    <>
      <A href="/single" passHref>
        <ATag>
          <Image src={news.thumb} />
          <NewsTitle size="22px">{news.title}</NewsTitle>
        </ATag>
      </A>
    </>
  )
}

export default Card
