import React from 'react'
import { Col, Container, Flex } from '../Styled/Home.Styled'
import CategroyLeft from './CategroyLeft'
import Sidebar from './Sidebar'

function Category() {
  return (
    <>
      <Container>
        <Flex>
          <Col width="75%" Mwidth="100%">
            <CategroyLeft />
          </Col>

          <Col width="25%" Mwidth="100%">
            <Sidebar />
          </Col>
        </Flex>
      </Container>
    </>
  )
}

export default Category
