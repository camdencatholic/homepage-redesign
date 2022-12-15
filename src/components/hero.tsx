import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import list from 'bootstrap-icons/icons/list.svg'
import x from 'bootstrap-icons/icons/x.svg'

export default (): JSX.Element => {
    const navigation = [
        { name: 'Give', href: '#' },
        { name: 'Calendar', href: '#' },
        { name: 'Alumni', href: '#' },
        { name: 'News', href: '#' },
      ]
  return (
    <div className="relative overflow-hidden bg-primary text-CCHSwhite">
      <div className="mx-auto max-w-7xl bg-primary">
        <div className="relative z-10 bg-primary pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-CCHSwhite lg:block"
            fill="#02492D"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Camden Catholic High School</span>
                      <img
                        alt="Your Company"
                        className="h-8 w-auto sm:h-10"
                        src="/homepage-redesign/CCHSwithSealMaskedWhite.png"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-CCHSwhite p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <img src={list} className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-CCHSwhite hover:text-gray-200">
                      {item.name}
                    </a>
                  ))}
                  <a href="#" className="font-medium text-secondary hover:text-yellow-500">
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/homepage-redesign/greenOnMask.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <img src={x} className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 bg-primary text-white">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-headliner">
                <span className="block text-CCHSwhite xl:inline">Make your high school experience</span>{' '}
                <span className="block text-CCHSwhite xl:inline underline">the best it can be.</span>
              </h1>
              <p className="mt-3 text-base text-CCHSwhite sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Come <span className='font-bold font-secondary'>IMAGINE </span><span className='font-bold font-secondary text-secondary'>| </span><span className='font-bold font-secondary'>CREATE </span><span className='font-bold font-secondary text-secondary'>| </span><span className='font-bold font-secondary'>INNOVATE</span> with us. <br/>
                Schedule a tour or apply now.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-yellow-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Apply now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-yellow-500 md:py-4 md:px-10 md:text-lg"
                  >
                    Schedule an in-person tour
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <video controls autoPlay={true} muted={true} loop={true}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full">
            <source src="/homepage-redesign/hero_video.mp4" />
        </video>
      </div>
    </div>
  )
}
