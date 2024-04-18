import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoSVG from '../images/432.svg'
import Navbar from './navbar'
import { TypeAnimation } from 'react-type-animation'

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
            <div className='mt-20'>
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
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
