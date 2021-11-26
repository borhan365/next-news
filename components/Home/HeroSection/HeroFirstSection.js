import React from 'react'
import { Grid } from '../../Styled/Home.Styled'
import LeadNewsContent from './LeadNewsContent'
import LeadNewsThumbnail from './LeadNewsThumbnail'
import SubLeadNews from './SubLeadNews'

function HeroFirstSection() {
  return (
    <Grid pb="10px" repeat="3" Mrepeat="1" gg="15px" Mgg="10px">
        <LeadNewsContent />
        <LeadNewsThumbnail />
        <SubLeadNews />
    </Grid>
  )
}

export default HeroFirstSection
