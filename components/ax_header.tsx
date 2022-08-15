/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```

  
*/

import { Fragment } from 'react'
import { BanIcon, BellIcon, MenuAlt1Icon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'
import { UserCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useUser } from '@auth0/nextjs-auth0'

interface IMenuUsuario {
  name: string,
  text: string,
  status: 'authenticated' | 'loading' | 'unauthenticated',
  EvClick?: any
  href: string
}
const menuUsuario: Array<IMenuUsuario> = [
  { name: "profile", text: "Tu Perfil", status: "authenticated", href: "/miperfil" },
  { name: "logout", text: "Cerrar Sesión", status: "authenticated", href: "/api/auth/logout" }
]
// const solutions = [
//   {
//     name: 'Inbox',
//     description: 'Get a better understanding of where your traffic is coming from.',
//     href: '#',
//     icon: InboxIcon,
//   },
//   {
//     name: 'Messaging',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     href: '#',
//     icon: AnnotationIcon,
//   },
//   { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
//   {
//     name: 'Knowledge Base',
//     description: "Connect with third-party tools that you're already using.",
//     href: '#',
//     icon: QuestionMarkCircleIcon,
//   },
// ]
interface IProps {
  setIsSidebarOpen: (active: boolean) => void;
}
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Municipalidad', href: '/municipalidad', current: false },
  { name: 'Turismo', href: '/turismo', current: false },
  { name: 'Obras', href: '/obra', current: false },
  { name: 'Contactos', href: '/contacto', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ setIsSidebarOpen }: IProps) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  return (


    <Disclosure as="header" className="bg-indigo-800 z-10 flex-shrink-0 h-30 sticky top-0 ">
      {({ open }) => (
        <>

          <div className="flex bg-indigo-500 pt-0 md:flex md:items-center ">
            <p className="mt-4 text-base text-gray-400 md:mt-0 ml-8">
              &copy; 2022 Municipalidad distrital de Colca.

            </p>
            <a key="f" href="#" className="text-gray-400 hover:text-gray-300 ml-8 mt-4 lg:mt-0">
              <svg fill="currentColor" viewBox="0 0 24 24" className=' h-4 w-4'>
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a key="f" href="#" className="text-gray-400 hover:text-gray-300 ml-8 mt-4 lg:mt-0">
              <svg fill="currentColor" viewBox="0 0 24 24" className=' h-4 w-4'>
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <div className="mt-0 border-t border-indigo-700 " />
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-indigo-700 ">
            <div className="relative h-16 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-20 w-auto"
                    src="https://sentinelmarketing.net/wp-content/uploads/2021/03/Logo-Original-Transparente-Cecolca-1024x1024.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-indigo-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-indigo-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-indigo-900 focus:placeholder-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-indigo-900 text-white' : 'text-indigo-300 hover:bg-indigo-700 hover:text-white',
                      'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="pt-2 pb-3 px-2 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-indigo-900 text-white' : 'text-indigo-300 hover:bg-indigo-700 hover:text-white',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {/* <div className="border-t border-indigo-700 pt-4 pb-3">
              <div className="px-4 flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-indigo-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-indigo-800 rounded-full p-1 text-indigo-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-indigo-400 hover:bg-indigo-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div> */}
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >

  )
}
