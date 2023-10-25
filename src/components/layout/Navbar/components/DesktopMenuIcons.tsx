import { SearchIcon, ShoppingBagIcon, User2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DesktopMenuIcons = () => {
  return (
    <div className='flex flex-1 justify-end'>
      <div className='relative max-lg:hidden' data-headlessui-state=''>
        <button
          className='group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-opacity-90 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:h-12 sm:w-12'
          type='button'
          aria-label='search'
          aria-expanded='false'
          data-headlessui-state=''
          id='search'
        >
          <SearchIcon size={24} />
          <Link className='absolute inset-0 block md:hidden' href='#'></Link>
        </button>
      </div>
      <div className='relative' data-headlessui-state=''>
        <button
          className='group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-opacity-90 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  sm:h-12 sm:w-12'
          type='button'
          aria-expanded='false'
          aria-label='account'
          data-headlessui-state=''
          id='account'
        >
          <User2Icon size={24} />
          <Link
            className='absolute inset-0 block md:hidden'
            href='/dashboard'
          ></Link>
        </button>
      </div>
      <div className='relative' data-headlessui-state=''>
        <button
          className='group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-opacity-90 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  sm:h-12 sm:w-12'
          type='button'
          aria-label='Add to cart'
          aria-expanded='false'
          data-headlessui-state=''
          id='Add to cart'
        >
          <span className='sr-only'>Add to cart</span>
          <div className='bg-primary-500 absolute right-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[10px] font-medium leading-none text-white'>
            <span className='-mt-[1px]'>3</span>
          </div>
          <ShoppingBagIcon size={24} />
          <Link
            className='absolute inset-0 block md:hidden'
            aria-label='Add to Cart'
            href='/cart'
          ></Link>
        </button>
      </div>
    </div>
  );
};

export default DesktopMenuIcons;
