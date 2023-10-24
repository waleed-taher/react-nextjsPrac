import Image from 'next/image';
import React from 'react';

const MobileMenu = () => {
  return (
    <div className='fixed inset-0 bg-neutral-900/60 opacity-100'>
      <div className='z-max fixed bottom-0 left-0 top-0 w-full max-w-md outline-none focus:outline-none md:w-auto'>
        <div className='relative z-20 translate-x-0 opacity-100'>
          <div className='h-screen w-full transform divide-y-2 divide-neutral-100 overflow-y-auto bg-white py-2 shadow-lg ring-1 transition dark:divide-neutral-800 dark:bg-neutral-900 dark:ring-neutral-700'>
            <div className='px-5 py-6'>
              <a
                className='ttnc-logo inline-block flex-shrink-0 text-slate-600'
                href='/'
              >
                <Image
                  alt='Logo'
                  width='162'
                  height='46'
                  decoding='async'
                  data-nimg='1'
                  className='block h-8 w-auto dark:hidden sm:h-10'
                  src='/_next/static/media/logo.14d0e71d.svg'
                />
                <Image
                  alt='Logo-Light'
                  width='162'
                  height='46'
                  decoding='async'
                  data-nimg='1'
                  className='hidden h-8 w-auto dark:block sm:h-10'
                  src='/_next/static/media/logo-light.695409b5.svg'
                />
              </a>
              <div className='mt-5 flex flex-col text-sm text-slate-600 dark:text-slate-300'>
                <span>
                  Discover the most outstanding articles on all topics of life.
                  Write your stories and share them
                </span>
                <div className='mt-4 flex items-center justify-between'>
                  <nav className='nc-SocialsList text-neutral-6000 flex space-x-2.5 text-2xl dark:text-neutral-300 '>
                    <a
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Facebook'
                    >
                      <Image
                        alt=''
                        loading='lazy'
                        width='136'
                        height='136'
                        decoding='async'
                        data-nimg='1'
                        src='/_next/static/media/facebook.b22e79d5.svg'
                      />
                    </a>
                    <a
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Twitter'
                    >
                      <Image
                        alt=''
                        loading='lazy'
                        width='136'
                        height='136'
                        decoding='async'
                        data-nimg='1'
                        src='/_next/static/media/twitter.d12eec73.svg'
                      />
                    </a>
                    <a
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Youtube'
                    >
                      <Image
                        alt=''
                        loading='lazy'
                        width='136'
                        height='136'
                        decoding='async'
                        data-nimg='1'
                        src='/_next/static/media/youtube.bcae2a7a.svg'
                      />
                    </a>
                    <a
                      className='flex h-7 w-7 items-center justify-center rounded-full text-xl sm:h-8 sm:w-8'
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Telegram'
                    >
                      <Image
                        alt=''
                        loading='lazy'
                        width='136'
                        height='136'
                        decoding='async'
                        data-nimg='1'
                        src='/_next/static/media/telegram.a3c75624.svg'
                      />
                    </a>
                  </nav>
                  <span className='block'>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-2xl text-neutral-700 hover:bg-neutral-100 focus:outline-none dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 md:text-3xl'>
                      <span className='sr-only'>Enable dark mode</span>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z'
                          stroke='currentColor'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></path>
                        <path
                          d='M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></path>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
              <span className='absolute right-2 top-2 p-1'>
                <button className='dark:hover-bg-neutral-700 flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none dark:text-neutral-300'>
                  <span className='sr-only'>Close</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-5 w-5'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
              </span>
              <div className='mt-5'>
                <form
                  action=''
                  method='POST'
                  className='flex-1 text-slate-900 dark:text-slate-200'
                >
                  <div className='flex h-full items-center space-x-1 rounded-xl bg-slate-50 px-4 py-2 dark:bg-slate-800'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='M22 22L20 20'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
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
              <li
                className='text-slate-900 dark:text-white'
                data-headlessui-state=''
              >
                <a
                  className='flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-slate-100 dark:hover:bg-slate-800'
                  href='/collection'
                >
                  <span className='block w-full'>Men</span>
                </a>
              </li>
              <li
                className='text-slate-900 dark:text-white'
                data-headlessui-state=''
              >
                <a
                  className='hover-bg-slate-100 dark:hover-bg-slate-800 flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide'
                  href='/collection-2'
                >
                  <span className='block w-full'>Women</span>
                </a>
              </li>
              <li
                className='text-slate-900 dark:text-white'
                data-headlessui-state=''
              >
                <a
                  className='hover-bg-slate-100 dark:hover-bg-slate-800 flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide'
                  href='/collection'
                >
                  <span className='block w-full'>Beauty</span>
                </a>
              </li>
              <li
                className='text-slate-900 dark:text-white'
                data-headlessui-state=''
              >
                <a
                  className='hover-bg-slate-100 dark:hover-bg-slate-800 flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide'
                  href='/collection-2'
                >
                  <span className='block w-full'>Sport</span>
                </a>
              </li>
              <li
                className='text-slate-900 dark:text-white'
                data-headlessui-state=''
              >
                <a
                  className='hover-bg-slate-100 dark:hover-bg-slate-800 flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide'
                  href='/collection'
                >
                  <span>Templates</span>
                  <span className='block flex-grow'>
                    <span
                      className='flex flex-grow justify-end'
                      id='headlessui-disclosure-button'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        aria-hidden='true'
                        className='ml-2 h-4 w-4 text-neutral-500'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
              <li
                className='text-slate-900 dark:text-white'
                data-headlessui-state=''
              >
                <a
                  className='hover-bg-slate-100 dark:hover-bg-slate-800 flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wide'
                  href='/search'
                >
                  <span>Explore</span>
                  <span className='block flex-grow'>
                    <span
                      className='flex flex-grow justify-end'
                      id='headlessui-disclosure-button'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        aria-hidden='true'
                        className='ml-2 h-4 w-4 text-neutral-500'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <div className='flex items-center justify-between space-x-2 px-5 py-6'>
              <a
                className='nc-Button ttnc-ButtonPrimary hover-bg-slate-800 focus:ring-primary-6000 relative inline-flex h-auto items-center justify-center rounded-full bg-slate-900 !px-10 py-3 text-sm font-medium text-slate-50 shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-opacity-90 dark:bg-slate-100 dark:text-slate-800 dark:focus:ring-offset-0 sm:px-6 sm:py-3.5 sm:text-base'
                href='/'
              >
                Buy this template
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
