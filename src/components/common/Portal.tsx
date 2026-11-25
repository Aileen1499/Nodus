import React from 'react';
import { createPortal } from 'react-dom';

/** Menampilkan lapisan layar penuh langsung di <body>, supaya tidak terjebak di bawah dock atau ikut tergulir bersama layar di belakangnya. */
export const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  typeof document === 'undefined' ? null : createPortal(children, document.body);
