import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='cta-section'>
        <div className="cta-badge">Start Learning your way</div>
        <h2 className='text-3xl font-bold '>Build a Personalize  Learning companion</h2>
        <p className=''>Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun. </p>
        <Image
          src={'/images/cta.svg'}
          alt='CTA Illustration'
          width={362}
          height={232}
          className='max-md:w-full'
        />
        <button className='btn-primary'>
            <Image
              src={'/icons/plus.svg'}
                alt='Plus Icon'
                width={12}
                height={12} 
            />
            <Link href={'/companions/new'} className='ml-2'>
                <p>Build New Companion</p>
            </Link>
        </button>
    </section>
  )
}

export default CTA