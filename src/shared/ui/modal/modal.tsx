'use client';

import { type ElementRef, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { IconButton } from '../buttons';
import { CloseIcon } from '../icons';

export interface ModalProps {
  open?: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ open, children, onClose }: ModalProps) => {
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const preventDefault = useCallback((e: TouchEvent) => e.preventDefault(), []);

  useEffect(() => {
    if (!dialogRef.current?.open && open) {
      dialogRef.current?.showModal();
      document.body.classList.add('overflow-y-hidden');
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
    }
  }, [open]);

  const onDismiss = () => {
    onClose();
    dialogRef.current?.close();
    document.body.classList.remove('overflow-y-hidden');
    document.body.removeEventListener('touchmove', preventDefault);
  };

  if (!open) {
    return null;
  }

  return createPortal(
    <div>
      <dialog
        ref={dialogRef}
        className='flex w-full justify-center bg-transparent backdrop:bg-black backdrop:opacity-50'
        onClose={onDismiss}
      >
        <div className='relative w-full max-w-[500px] rounded-[20px] border-blue-500 bg-white p-6 shadow-lg'>
          {children}
          <IconButton
            className='absolute right-[10px] top-[10px]'
            icon={<CloseIcon className='h-[20px] w-[20px] stroke-blue-500 ' />}
            onClick={onDismiss}
          />
        </div>
      </dialog>
    </div>,
    document.body!
  );
};
