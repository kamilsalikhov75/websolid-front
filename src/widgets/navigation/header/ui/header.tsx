'use client';

import Link from 'next/link';
import { CONTACT_US, ROUTES } from '../model/meta';
import {
  NavLink,
  Typography,
  IconButton,
  LinkButton,
  BurgerMenuIcon,
  CloseIcon,
  Logo
} from '@/shared/ui';
import { useState } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  };

  return (
    <header className='flex w-full items-center justify-between py-5'>
      <Link href='/'>
        <Logo />
      </Link>
      <nav className='hidden gap-5 lg:flex'>
        {ROUTES.map((route, index) => (
          <NavLink key={index} href={route.href}>
            {route.label}
          </NavLink>
        ))}
      </nav>
      <div className='hidden lg:block'>
        <LinkButton href={CONTACT_US.href}>{CONTACT_US.label}</LinkButton>
      </div>
      <IconButton className='lg:hidden' icon={<BurgerMenuIcon />} onClick={toggleMenu} />
      <div
        className={clsx('absolute  right-0 top-0 h-dvh  bg-blue-500 transition-all lg:hidden', {
          'w-0 overflow-clip opacity-0': !isMenuOpen,
          'w-dvw px-[10px] md:px-5 opacity-100': isMenuOpen
        })}
      >
        <div className='flex items-center justify-between py-5'>
          <Link href='/' onClick={toggleMenu}>
            <Logo className='fill-white' />
          </Link>{' '}
          <IconButton icon={<CloseIcon />} onClick={toggleMenu} />
        </div>
        <nav className='flex flex-col items-end gap-5 text-white'>
          {ROUTES.map((route, index) => (
            <Link key={index} href={route.href} onClick={toggleMenu}>
              <Typography tag='span' variant='body-base'>
                {route.label}
              </Typography>
            </Link>
          ))}
          <Link href={CONTACT_US.href} onClick={toggleMenu}>
            <Typography tag='span' variant='body-base'>
              {CONTACT_US.label}
            </Typography>
          </Link>
        </nav>
      </div>
    </header>
  );
};
