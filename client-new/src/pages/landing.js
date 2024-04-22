import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoSVG from '../images/432.svg'
import Navbar from './navbar'
import { TypeAnimation } from 'react-type-animation'
import Features from './Features'
import Newsletter from './NewsLetter'
import Projects from '../components/projects'


const navigation = [
  { name: 'Projects', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'About', href: '#' },
]

export default function ProjectPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="grainy-background h-screen Satoshi text-white">
      <Navbar/>
      <div className="relative isolate px-6lg:px-8">
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
                    'Welcome to Structor.io, projects galore!',
                    1000, // wait 2s before showing next message
                    'Share your projects with the world.',
                    1000,
                    'Connect with others !',
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
      <Projects/>
      <Newsletter/>
    </div>
  )
}
