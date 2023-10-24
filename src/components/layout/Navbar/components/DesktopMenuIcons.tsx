import { SearchIcon, ShoppingBagIcon, User2Icon } from 'lucide-react';
import React from 'react';

const DesktopMenuIcons = () => {
  return (
    <div className='flex flex-1 justify-end'>
      <div className='relative max-lg:hidden' data-headlessui-state=''>
        <button
          className='group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-opacity-90 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:hover:bg-slate-800 sm:h-12 sm:w-12'
          type='button'
          aria-expanded='false'
          data-headlessui-state=''
          id='headlessui-popover-button-:R3oba:'
        >
          <SearchIcon size={24} />
          <a className='absolute inset-0 block md:hidden' href='/cart'></a>
        </button>
      </div>
      <div className='relative' data-headlessui-state=''>
        <button
          className='group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-opacity-90 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:hover:bg-slate-800 sm:h-12 sm:w-12'
          type='button'
          aria-expanded='false'
          data-headlessui-state=''
          id='headlessui-popover-button-:R3oba:'
        >
          <User2Icon size={24} />
          <a className='absolute inset-0 block md:hidden' href='/cart'></a>
        </button>
      </div>
      <div className='relative' data-headlessui-state=''>
        <button
          className='group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-opacity-90 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:hover:bg-slate-800 sm:h-12 sm:w-12'
          type='button'
          aria-expanded='false'
          data-headlessui-state=''
          id='headlessui-popover-button-:R3oba:'
        >
          <div className='bg-primary-500 absolute right-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[10px] font-medium leading-none text-white'>
            <span className='-mt-[1px]'>3</span>
          </div>
          <ShoppingBagIcon size={24} />
          <a className='absolute inset-0 block md:hidden' href='/cart'></a>
        </button>
      </div>
    </div>
  );
};

export default DesktopMenuIcons;
