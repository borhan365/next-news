import React from 'react';
import { Div, NewsTitle, SubTitle, TitleSpan, Underline } from '../../../Styled/Home.Styled';


function Featured(props) {
    return (
        <>
            <Div border="1px solid lightgray" padding="20px" Mpadding="10px" pt="40px" Mpt="20px">
                {/* Subtitle */}
                <SubTitle size="20px" Msize="18px" weight="bold" color="#34b8b5">
                    {props.SubTitle}
                </SubTitle>

                {/* Title */}
                <NewsTitle size="30px" Msize="22px" margin="20px 0px" left="-25px" Mleft="-5px" width="90%">
                    <TitleSpan lh="45px" Mlh="35px">{props.Title}</TitleSpan>
                </NewsTitle>

                {/* Desc */}
                <SubTitle size="20px" Msize="16px" height="27px" mt="20px">
                    {props.Desc}
                </SubTitle>

                {/* Author */}
                <Div mt="20px">
                    <NewsTitle width="max-content" Msize="17px">
                    <Underline width="max-content" />
                        {props.Author}
                    </NewsTitle>
                </Div>

            </Div>
        </>
    )
}

export default Featured
