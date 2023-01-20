import React from 'react'
import PropTypes from 'prop-types'

import Image from 'next/image'

import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'
import {HomeIcon} from '@heroicons/react/24/solid'
import Home from "@/pages";

Header.propTypes = {};

function Header(props) {
  return (
    <div className={'shadow-sm border-b bg-white sticky top-0 z-50'}>
      <div className={'flex items-center justify-between bg-white max-w-3xl xl:max-w-6xl mx-5 lg:mx-auto'}>
        {/* Left */}
        <div className={'relative hidden lg:inline-grid w-24 cursor-pointer'}>
          <Image
            src={'https://links.papareact.com/ocw'}
            alt={'Instagram logo'}
            width={200}
            height={200}
            className={'object-contain'}
          />
        </div>

        <div className={'relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'}>
          <Image
            src={'https://links.papareact.com/jjm'}
            alt={'Instagram logo'}
            width={200}
            height={200}
            className={'object-contain'}
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className={'relative mt-1 p-3 rounded-md'}>
            <div className={'absolute inset-y-0 pl-3 flex items-center pointer-events-none'}>
              <MagnifyingGlassIcon className={'h-5 w-5 text-gray-500'}/>
            </div>
            <input
              type='text' placeholder={'Search'}
              className={'bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'}
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className={'navBtn'}/>
          <Bars3Icon className={'w-10 md:hidden cursor-pointer'}/>

          <div className={'relative navBtn'}>
            <PaperAirplaneIcon className={'navBtn'}/>
            <div
              className="absolute -top-1 -right-2 text-sx w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3
            </div>
          </div>
          <PlusCircleIcon className={'navBtn'}/>
          <UserGroupIcon className={'navBtn'}/>
          <HeartIcon className={'navBtn'}/>

          <img src='https://links.papareact.com/3ke' alt="" className={'h-10 rounded-full cursor-pointer'}/>
        </div>
      </div>
    </div>
  );
}

export default Header;