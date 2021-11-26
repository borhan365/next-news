import React from 'react';
import { Flex, Col, SportsContainer } from '../../Styled/Home.Styled';
import LeftSports from './LeftSports/LeftSports';
import RightSports from './RightSports/RightSports'

function SportsSection() {
    return (
        <>
            <Flex pt="20px">
                {/* Left Sports */}
                <SportsContainer>
                    <LeftSports /> 
                </SportsContainer>

                {/* Right Sports */}
                <SportsContainer>
                    <RightSports />
                </SportsContainer>
            </Flex>
        </>
    )
}

export default SportsSection;
