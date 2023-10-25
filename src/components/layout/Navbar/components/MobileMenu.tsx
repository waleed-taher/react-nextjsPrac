import {
  FacebookIcon,
  Search,
  SunIcon,
  TwitterIcon,
  X,
  YoutubeIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ImTelegram } from 'react-icons/im';

import APP_IMAGES from '@/constant/images';

const MobileMenu = () => {
  return (
    <div className='fixed inset-0 bg-neutral-900/60 opacity-100'>
      <div className='z-max fixed bottom-0 left-0 top-0 w-full max-w-md outline-none focus:outline-none md:w-auto'>
        <div className='relative z-20 translate-x-0 opacity-100'>
          <div className='h-screen w-full transform divide-y-2 divide-neutral-100 overflow-y-auto bg-white py-2 shadow-lg ring-1 transition '>
            <div className='px-5 py-6'>
              <Link
                className='inline-block flex-shrink-0 text-slate-600'
                href='/'
              >
                <Image
                  alt='Logo'
                  width='162'
                  height='46'
                  decoding='async'
                  data-nimg='1'
                  className='hidden h-8 w-auto dark:block sm:h-10'
                  src={APP_IMAGES.logo}
                />
              </Link>
              <div className='mt-5 flex flex-col text-sm text-slate-600 '>
                <span>
                  Discover the most outstanding articles on all topics of life.
                  Write your stories and share them
                </span>
                <div className='mt-4 flex items-center justify-between'>
                  <nav className='text-neutral-6000 flex space-x-2.5 text-2xl  '>
                    <Link
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Facebook'
                    >
                      <FacebookIcon />
                    </Link>
                    <Link
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Twitter'
                    >
                      <TwitterIcon />
                    </Link>
                    <Link
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Youtube'
                    >
                      <YoutubeIcon />
                    </Link>
                    <Link
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Telegram'
                    >
                      <ImTelegram />
                    </Link>
                  </nav>
                  <span className='block'>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-2xl text-neutral-700 hover:bg-neutral-100 focus:outline-none  md:text-3xl'>
                      <span className='sr-only'>Enable dark mode</span>
                      <SunIcon />
                    </button>
                  </span>
                </div>
              </div>
              <span className='absolute right-2 top-2 p-1'>
                <button className='flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none '>
                  <span className='sr-only'>Close</span>
                  <X />
                </button>
              </span>
              <div className='mt-5'>
                <form
                  action=''
                  method='POST'
                  className='flex-1 text-slate-900 '
                >
                  <div className='flex h-full items-center space-x-1 rounded-xl bg-slate-50 px-4 py-2 '>
                    <Search />
                    <input
                      placeholder='Type and press enter'
                      className='w-full border-none bg-transparent text-sm focus:outline-none focus:ring-0'
                      type='search'
                    />
                  </div>
                  <input type='submit' value='' />
                </form>
              </div>
            </div>
            <ul className='flex flex-col space-y-1 px-2 py-6'>
              <li className='text-slate-900 ' data-headlessui-state=''>
                <Link
                  className='flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-slate-100 '
                  href='/men'
                >
                  <span className='block w-full'>Men</span>
                </Link>
              </li>
              <li className='text-slate-900 ' data-headlessui-state=''>
                <Link
                  className='flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-slate-100'
                  href='/women'
                >
                  <span className='block w-full'>Women</span>
                </Link>
              </li>
              <li className='text-slate-900 ' data-headlessui-state=''>
                <Link
                  className='flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-slate-100'
                  href='/beauty'
                >
                  <span className='block w-full'>Beauty</span>
                </Link>
              </li>
              <li className='text-slate-900 ' data-headlessui-state=''>
                <Link
                  className='flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-slate-100'
                  href='/sport'
                >
                  <span className='block w-full'>Sport</span>
                </Link>
              </li>
            </ul>
            <div className='flex items-center justify-between space-x-2 px-5 py-6'>
              <a
                className=' hover-bg-slate-800 focus:ring-primary-6000 relative inline-flex h-auto items-center justify-center rounded-full bg-slate-900 !px-10 py-3 text-sm font-medium text-slate-50 shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-opacity-90  sm:px-6 sm:py-3.5 sm:text-base'
                href='/'
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
