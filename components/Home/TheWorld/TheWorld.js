import React from 'react'
import { BorderBottom, CategoryTitle, CategoryTitleText, CategoryTitleTextIcon, Col, Div, Flex } from '../../Styled/Home.Styled'
import FeatureContent from './FeatureContent'
import Featured from './Featured'
import SubFeatured from './SubFeatured'
import SubNewsContent from './SubNewsContent'

function TheWorld() {
    return (
        <>
            <Div>

            {/* Title */}
            <CategoryTitle mb="5px">
                <CategoryTitleText>
                    বিশ্বজুড়ে  <CategoryTitleTextIcon/>
                </CategoryTitleText>
            </CategoryTitle>

            <Flex>

                {/* Featured news */}
                <Col padding="unset">
                    {
                        FeatureContent.map((val, index) => {
                            return(
                                <Featured 
                                    key={index}
                                    Title = {val.Title}
                                    Thumb = {val.Thumb}
                                    Desc = {val.Desc}
                                    Date = {val.Date}
                                />
                            )
                        })
                    }
                </Col>

                {/* Sub-Featured News */}
                <Col padding="unset">
                    {
                        SubNewsContent.map((val, index) => {
                            return(
                                <SubFeatured 
                                    key={index}
                                    Title = {val.Title}
                                    Thumb = {val.Thumb}
                                    Desc = {val.Desc}
                                    Date = {val.Date}
                                />
                            )
                        })
                    }
                </Col>
            </Flex>
            </Div>
            <BorderBottom margin="10px 0px" />
        </>
    )
}

export default TheWorld
