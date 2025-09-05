import React from 'react'
import TrustedBySection from '../components/TrustedBy/TrustedBySection'
import BenefitsSection from '../components/Benefits/BenefitsSection'
import ExclusiveBenefits from '../components/MemberShip/ExclusiveBenefits'
import CallToActionSection from '../components/RegisterforFree/CallToActionSection'
import MeetYourTrainer from '../components/Trainer/MeetYourTrainer'
import PricingPlan from '../components/PricingPlan/PricingPlan'
import FaqSection from '../components/FAQ/FaqSection'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <TrustedBySection/>
      <BenefitsSection/>
      <ExclusiveBenefits/>
      <CallToActionSection/>
      <MeetYourTrainer/>
      <PricingPlan/>
      <FaqSection/>
      <Footer/>
    </div>
  )
}

export default Home
