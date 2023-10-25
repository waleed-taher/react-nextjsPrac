'use client';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import Container from '@/components/Container';
import DesktopMenu from '@/components/layout/Navbar/components/DesktopMenu';
import DesktopMenuIcons from '@/components/layout/Navbar/components/DesktopMenuIcons';
import MobileMenu from '@/components/layout/Navbar/components/MobileMenu';

import APP_IMAGES from '@/constant/images';

const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false);
  return (
    <header className=''>
      <Container>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center lg:hidden'>
            <button
              onClick={() => setMobMenu(!mobMenu)}
              className='flex items-center justify-center rounded-lg p-2.5 text-neutral-700 focus:outline-none '
            >
              <Menu />
            </button>
          </div>
          <div className='flex-2 items-center lg:flex-1'>
            <Link href='/'>
              <Image
                src={APP_IMAGES.logo}
                alt='Logo'
                width={140}
                height={40}
                className='h-auto w-auto max-sm:h-8 sm:h-10'
              />
            </Link>
          </div>
          <DesktopMenu />
          <DesktopMenuIcons />
        </div>
        {mobMenu && <MobileMenu />}
      </Container>
    </header>
  );
};

export default Navbar;
