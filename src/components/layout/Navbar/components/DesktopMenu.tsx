import Link from 'next/link';
import React from 'react';

import NavMockData from '@/constant/mockData';

const DesktopMenu = () => {
  return (
    <nav className='max-lg:hidden'>
      <ul className='flex flex-[2] items-center justify-center'>
        {NavMockData.map((navItem) => (
          <Link key={navItem.id} href={navItem.path}>
            <div className='mx-4 flex h-20 items-center'>
              <li className='inline-flex flex-shrink-0 items-center rounded-full px-4 py-2.5 text-[15px] text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-200 xl:px-5'>
                {navItem.title}
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
