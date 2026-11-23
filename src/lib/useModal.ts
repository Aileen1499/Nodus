import { useEffect, useRef } from 'react';

// Perilaku bersama untuk layar penuh/sheet: tombol Esc menutup hanya lapisan paling atas,
// dan gulir halaman di belakang dikunci selama ada lapisan terbuka.
const stack: Array<() => void> = [];
let locks = 0;
let prevOverflow = '';

const onKey = (e: KeyboardEvent) => {
  if (e.key !== 'Escape' || stack.length === 0) return;
  e.stopPropagation();
  stack[stack.length - 1]();
};

export const useModal = (onClose: () => void) => {
  const ref = useRef(onClose);
  ref.current = onClose;
  useEffect(() => {
    const close = () => ref.current();
    stack.push(close);
    if (stack.length === 1) window.addEventListener('keydown', onKey, true);
    if (locks++ === 0) {
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    return () => {
      const i = stack.lastIndexOf(close);
      if (i >= 0) stack.splice(i, 1);
      if (stack.length === 0) window.removeEventListener('keydown', onKey, true);
      if (--locks === 0) document.body.style.overflow = prevOverflow;
    };
  }, []);
};
