import Hero from '../components/Hero'
import WhatIsUCP from '../components/sections/WhatIsUCP'
import HowItWorks from '../components/sections/HowItWorks'
import Capabilities from '../components/sections/Capabilities'
import Architecture from '../components/sections/Architecture'
import PaymentModel from '../components/sections/PaymentModel'
import ForDevelopers from '../components/sections/ForDevelopers'
import Ecosystem from '../components/sections/Ecosystem'

export default function UCPPage() {
  return (
    <>
      <Hero />
      <WhatIsUCP />
      <HowItWorks />
      <Capabilities />
      <Architecture />
      <PaymentModel />
      <ForDevelopers />
      <Ecosystem />
    </>
  )
}
