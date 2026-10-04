import { useEffect } from 'react';

let lockCount = 0;
let savedScrollY = 0;

/**
 * Locks background scrolling completely, preventing any scroll on the underlying page
 * while a modal/popup is open (desktop, iOS Safari, Android Chrome).
 */
export const lockBodyScroll = () => {
  lockCount++;
  if (lockCount === 1) {
    savedScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    
    // Add scroll-locked class to html and body
    document.documentElement.classList.add('body--scroll-locked');
    document.body.classList.add('body--scroll-locked');
    
    // Lock body in place at the exact current scroll position
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }
};

/**
 * Unlocks background scrolling when all popups/modals are closed.
 */
export const unlockBodyScroll = () => {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.documentElement.classList.remove('body--scroll-locked');
    document.body.classList.remove('body--scroll-locked');
    
    const topStyle = document.body.style.top;
    const restoreY = topStyle ? Math.abs(parseInt(topStyle, 10)) : savedScrollY;
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    
    window.scrollTo(0, restoreY);
  }
};

/**
 * React hook to lock scroll when `isLocked` is true.
 * Cleans up automatically on component unmount or when `isLocked` turns false.
 */
export const useScrollLock = (isLocked: boolean = true) => {
  useEffect(() => {
    if (!isLocked) return;

    lockBodyScroll();
    return () => {
      unlockBodyScroll();
    };
  }, [isLocked]);
};
