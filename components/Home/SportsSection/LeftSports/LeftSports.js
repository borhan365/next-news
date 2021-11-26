import React from 'react'
import Featured from './Featured'
import Items from './Items'
import { Col, SportsWrapper, SportsBanner  } from '../../../Styled/Home.Styled'

import Image from 'next/image'
import Banner from './Image/euro.webp'

function LeftSports() {
    return (
        <>
        {/* Top banner */}
        <SportsBanner>
            <Image src={Banner} alt="Banner" />
        </SportsBanner>

        {/* News Body */}
        <SportsWrapper>

            {/* Featured news */}
            <Col padding="10px">
                <Featured />
            </Col>
            
            {/* News Items */}
            <Col padding="10px">
                <Items />
            </Col>

        </SportsWrapper>
        </>
    )
}

export default LeftSports
