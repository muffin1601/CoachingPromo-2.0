"use client";
import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/react-source/pages/Customize/CustomizerAll'), {
  ssr: false, loading: () => <p role="status">Loading…</p>
});
export default function ReactPage() { return <Page />; }
