import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Login from './Login'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
               <Link to="/" className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
                       Home
                </Link>
               <Link to="/login" className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
                       Login
                </Link>
               <Link to="/register" className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
                       Register
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="cursor-pointer font-bold relative rounded-full p-1 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link to="/" className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
                       Home
                </Link>
               <Link to="/login" className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
                       Login
                </Link>
               <Link to="/register" className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
                       Register
                </Link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}