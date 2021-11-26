import React from 'react'
import { A, ATag, Div, Flex, Image, ImageThumb, NewsTitle, SubTitle } from '../../../Styled/Home.Styled'

function Items(props) {
    return (
        <>
        <Div>
            <Flex jc="flex-start" ai="center" gg="20px" mb="10px" Mfd="row">
                <ImageThumb width="150px" height="110px" radius="50%">          
                    <A href="/single" passHref>
                        <ATag>
                            <Image fit="cover" src={props.Thumb} alt={props.Title} />  
                        </ATag>
                    </A>
                </ImageThumb>

                <Div bb="1px solid lightgray" width="100%" pb="15px">
                    <NewsTitle size="17px" height="12px" color="#34b8b5">
                        {props.Title}
                    </NewsTitle>
                    <NewsTitle size="20px" height="30px">
                        <A href="/single" passHref>
                        <ATag>{props.Title}</ATag>
                        </A>
                    </NewsTitle>
                    <SubTitle size="18px">
                        <A href="/single" passHref>
                        <ATag>{props.Desc}</ATag>
                        </A>
                    </SubTitle>
                    <SubTitle pt="0px" color="#001246" weight="bold">{props.Author}</SubTitle>
                </Div>
            </Flex>
        </Div>
        </>
    )
}

export default Items
