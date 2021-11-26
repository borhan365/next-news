import React, { useState } from 'react'
import { ButtonOutlined, Flex, FlexColumn, NotificationIcon, VersionItem, VersionLink, VersionTitle, VersionWrapper, Bold, DownIcon, RadioButton, RadioButtonChecked } from '../Header.styled'

function TopHeaderRight() {
  const [radioValue, setRadio] = useState(true)
  return (
    <FlexColumn alignItems="flex-end">
      <Flex>
          <NotificationIcon />
          <ButtonOutlined>লগইন</ButtonOutlined>
      </Flex>
          <VersionTitle>সংস্করণ: <Bold>বাংলা <DownIcon /></Bold>
              <VersionWrapper>
                  <VersionItem>
                      <RadioButtonChecked />বাংলা
                  </VersionItem>
                  <VersionItem>
                      <RadioButton /> ইংরেজি
                  </VersionItem>
                  <VersionItem>
                      <RadioButton /> উত্তর আমেরিকা
                  </VersionItem>
              </VersionWrapper>
          </VersionTitle>
    </FlexColumn>
  )
}

export default TopHeaderRight
