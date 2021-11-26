import React from 'react'
import { CategoryTitle, CategoryTitleText, CategoryTitleTextIcon, Col, Div, Flex } from '../../Styled/Home.Styled'
import FeaturedContent from './Featured/FeatureContent'
import Featured from './Featured/Featured'
import ItemContent from './Items/ItemContent'
import Items from './Items/Items'

const OpinionSection = () => {
    return (
        <>

            {/* Title */}
            <CategoryTitle mb="5px">
                <CategoryTitleText>
                    মতামত <CategoryTitleTextIcon/>
                </CategoryTitleText>
            </CategoryTitle>

                <Flex gg="20px" mb="20px">

                    {/* Featured */}
                    <Col width="60%" Mwidth="100%" padding="0px">
                        <Flex gg="30px" Mfd="row">
                            {
                                FeaturedContent.map((val, index) => {
                                    return(
                                        <Featured 
                                            key={index}
                                            SubTitle = {val.SubTitle}
                                            Title = {val.Title}
                                            Desc = {val.Desc}
                                            Author = {val.Author}
                                        />
                                    )
                                })
                            }
                        </Flex>
                    </Col>

                    {/* Items */}
                    <Col width="40%" Mwidth="100%">

                         <Div>
                            {
                                ItemContent.map((val, index) => {
                                    return(
                                        <Items 
                                            key={index}
                                            Title = {val.Title}
                                            Thumb = {val.Thumb}
                                            Desc = {val.Desc}
                                            Author = {val.Author}
                                        />
                                    )
                                })
                            }
                        </Div>

                    </Col>

                </Flex>

        </>
    )
}

export default OpinionSection
