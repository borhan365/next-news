import React from 'react'
import { ButtonOutlined } from '../Header/Header.styled'
import { Col, Flex } from '../Styled/Home.Styled'
import SubFeatured from './SubFeatured'
import SubNewsContent from './SubNewsContent'

function ThirdSection() {
  return (
    <>
      <Flex mt="30px" Mmt="0px">
          <Col width="30%"></Col>
          <Col width="70%" Mwidth="100%">
            {
              SubNewsContent.map((news) => (
                <SubFeatured news={news} key={news._id} />
              ))
            }
            <ButtonOutlined jc="center" width="max-content" mt="20px" margin="0px auto" >আরও পড়ুন</ButtonOutlined>
          </Col>
      </Flex>
    </>
  )
}

export default ThirdSection
