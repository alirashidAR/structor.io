import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoSVG from '../images/432.svg'
import Navbar from './navbar'
import { TypeAnimation } from 'react-type-animation'
import Features from './Features'
import Newsletter from './NewsLetter'

const navigation = [
  { name: 'Projects', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'About', href: '#' },
]

export default function ProjectPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="grainy-background Satoshi">
      <Navbar/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
            <img src={LogoSVG} alt="Logo" className="h-48" /> {/* Your SVG */}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Share and Collaborate on Projects
            </h1>
            <div className='mt-20 w-full'>
            <TypeAnimation
                  sequence={[
                    'Welcome to our project collaboration platform!',
                    1000, // wait 2s before showing next message
                    'Share your projects with the world and collaborate seamlessly.',
                    1000,
                    'Connect with others, get feedback, and bring your ideas to life!',
                    1000,
                    'Start sharing and collaborating today!',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Newsletter/>
    </div>
  )
}
