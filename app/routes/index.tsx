import React from 'react'
import { Popover } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { FireIcon, HomeIcon, MenuIcon, TrendingUpIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Design System', href: '#', icon: HomeIcon, current: true },
  { name: 'Components', href: '#', icon: FireIcon, current: false },
  { name: 'Release Notes', href: '#', icon: TrendingUpIcon, current: false },
  { name: 'About Us', href: '#', icon: UserGroupIcon, current: false }
]

const communities = [
  { name: 'Buttons', href: '#' },
  { name: 'Inputs', href: '#' },
  { name: 'Cards', href: '#' }
]

function classNames (...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Index (): JSX.Element {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className='min-h-full'>
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <Popover
          as='header'
          className={({ open }) =>
            classNames(
              open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible'
            )}
        >
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8'>
                  <div className='flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2'>
                    <div className='flex-shrink-0 flex items-center'>
                      <a href='#'>
                        <img
                          className='block h-8 w-auto'
                          src='https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500'
                          alt='Workflow'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6'>
                    <div className='flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0'>
                      <div className='w-full'>
                        <label htmlFor='search' className='sr-only'>
                          Search
                        </label>
                        <div className='relative'>
                          <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
                            <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                          </div>
                          <input
                            id='search'
                            name='search'
                            className='block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm'
                            placeholder='Search'
                            type='search'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden'>
                    {/* Mobile menu button */}
                    <Popover.Button className='-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500'>
                      <span className='sr-only'>Open menu</span>
                      {open
                        ? (
                          <XIcon className='block h-6 w-6' aria-hidden='true' />
                          )
                        : (
                          <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                          )}
                    </Popover.Button>
                  </div>
                  <div className='hidden lg:flex lg:items-center lg:justify-end xl:col-span-4'>
                    {/* menu stuff */}
                  </div>
                </div>
              </div>

              <Popover.Panel as='nav' className='lg:hidden' aria-label='Global'>
                <div className='max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                        'block rounded-md py-2 px-3 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='border-t border-gray-200 pt-4' />

                <div className='mt-6 max-w-3xl mx-auto px-4 sm:px-6'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700'
                  >
                    New Post
                  </a>

                  <div className='mt-6 flex justify-center'>
                    <a href='#' className='text-base font-medium text-gray-900 hover:underline'>
                      Go Premium
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <div className='py-10'>
          <div className='max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='hidden lg:block lg:col-span-3 xl:col-span-2'>
              <nav aria-label='Sidebar' className='sticky top-4 divide-y divide-gray-300'>
                <div className='pb-8 space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50',
                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                      <span className='truncate'>{item.name}</span>
                    </a>
                  ))}
                </div>
                <div className='pt-10'>
                  <div className='mt-3 space-y-2' aria-labelledby='communities-headline'>
                    {communities.map((community) => (
                      <a
                        key={community.name}
                        href={community.href}
                        className='group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'
                      >
                        <span className='truncate'>{community.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
            <main className='lg:col-span-9 xl:col-span-6'>
              {/* Content Here */}
            </main>
            <aside className='hidden xl:block xl:col-span-4' />
          </div>
        </div>
      </div>
    </>
  )
}
