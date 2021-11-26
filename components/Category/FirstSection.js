import React from 'react'
import { BorderBottom, Col, Flex, MobileHide } from '../Styled/Home.Styled'
import Featured from './Featured'
import SubNews from './SubNews'

function FirstSection() {
  return (
    <>
    <Flex>
          <Col width="70%" Mwidth="100%">
             <Featured />
          </Col>

            <Col width="30%" Mwidth="100%">
          <MobileHide>
                  <SubNews />
          </MobileHide>
            </Col>
        </Flex>

        <BorderBottom margin="20px 0px" Mdisplay="none" />
      
    </>
  )
}

export default FirstSection
