import React from 'react'
import CapitalSection from './CapitalSection/CapitalSection'
import HeroSection from './HeroSection/HeroSection'
import SportsSection from './SportsSection/SportsSection'
import TheWorld from './TheWorld/TheWorld'
import Entertainment from './Entertainment/Entertainment'
import OpinionSection from './OpinionSection/OpinionSection'
import VideoSection from './VideoSection/VideoSection'
import { Container } from '../../components/Styled/Home.Styled'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import FourColumnSection from './FourColumnSection/FourColumnSection'

function Home() {
  return (
    <>
      <Container bg="green">
        <HeroSection />
        <SportsSection />
        <CapitalSection />
        <TheWorld />
        <Entertainment />
        <OpinionSection />
      </Container>

        <VideoSection />
      
      <Container>
        <PhotoGallery />
        <FourColumnSection />
      </Container>
    </>
  )
}

export default Home
