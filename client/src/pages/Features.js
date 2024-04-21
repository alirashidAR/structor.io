import React, { useEffect } from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon,UsersIcon,PresentationChartBarIcon } from '@heroicons/react/24/outline'
import AOS from 'aos';
import 'aos/dist/aos.css';


const features = [
  {
    name: 'Easy Project Sharing',
    description:
      'Quickly share your projects with the world. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Secure Collaboration',
    description:
      'Connect with like-minded individuals in a secure environment. Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Efficient Communication',
    description:
      'Simplify communication and feedback exchange among collaborators. Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Community Building',
    description:
      'Build a thriving community around your projects and ideas. Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: UsersIcon,
  },
]

export default function Features() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="bg-white py-24 sm:py-32 features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center" data-aos="zoom-in-up">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Share and Collaborate</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features for Project Sharing and Collaboration
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your project sharing and collaboration experience with these key features designed to connect you with like-minded individuals and streamline your workflow.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl" data-aos="fade-up" >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16" >
                <dt className="text-base font-semibold leading-7 text-gray-900 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
