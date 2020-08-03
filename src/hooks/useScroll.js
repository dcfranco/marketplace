
import { useState, useEffect, useRef, useCallback } from 'react';

export function useScroll() {
  const lastScrollTop = useRef(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  const listener = useCallback((e) => {
    const scrollY = window.scrollY
    if (scrollY > lastScrollTop.current + 20 && scrollY >= 0) {
      setScrollDirection('down')
    }
    if (scrollY < lastScrollTop.current) {
      setScrollDirection('up')
    }
    lastScrollTop.current = window.scrollY
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  },[listener]);

  return {
    scrollDirection,
  }
}