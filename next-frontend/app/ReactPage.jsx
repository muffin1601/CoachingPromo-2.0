"use client";

import Home from '@/react-source/pages/Home';

// Keep the homepage in the initial server render. A dynamic boundary here used
// to stream a one-line loading state before the full homepage, which moved the
// already-rendered footer when the boundary resolved and caused a large CLS.
export default function ReactPage() {
  return <Home />;
}
