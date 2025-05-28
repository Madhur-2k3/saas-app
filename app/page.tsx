import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className=' text-4xl underline text-blue-400'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='456'
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          subject='math'
          duration={30}
          color='#ff6e6e'
        />
        <CompanionCard
          id='789'
          name='Verba the Vocabulary Builder'
          topic='English Literature'
          subject='english'
          duration={60}
          color='#6effda'
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title='Recently completed lessons'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full '
        />
        <CTA 
        
        />
      </section>
    </main>
  )
}

export default Page