'use client';

import Link from 'next/link';
import { CONTACT_US, ROUTES } from '../model/meta';
import {
  NavLink,
  Typography,
  IconButton,
  BurgerMenuIcon,
  CloseIcon,
  Logo,
  Modal,
  Button
} from '@/shared/ui';
import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { FeedbackForm } from '@/src/features/feedback';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const preventDefault = useCallback((e: TouchEvent) => e.preventDefault(), []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) {
      document.body.classList.add('overflow-y-hidden');
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
    } else {
      document.body.classList.remove('overflow-y-hidden');
      document.body.removeEventListener('touchmove', preventDefault);
    }
  };

  return (
    <>
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
          <Button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {CONTACT_US.label}
          </Button>
        </div>
        <IconButton className='lg:hidden' icon={<BurgerMenuIcon />} onClick={toggleMenu} />
        <div
          className={clsx('absolute  right-0 top-0 h-dvh  bg-blue-500 transition-all lg:hidden', {
            'w-0 overflow-clip opacity-0': !isMenuOpen,
            'w-dvw px-[10px] opacity-100 md:px-5': isMenuOpen
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
            <button
              onClick={() => {
                setIsModalOpen(true);
                toggleMenu();
              }}
            >
              <Typography tag='span' variant='body-base'>
                {CONTACT_US.label}
              </Typography>
            </button>
          </nav>
        </div>
      </header>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <FeedbackForm />
      </Modal>
    </>
  );
};
