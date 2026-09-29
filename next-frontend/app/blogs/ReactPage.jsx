"use client";
import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/react-source/pages/BlogList'), {
  ssr: true, loading: () => <p role="status">Loading…</p>
});
export default function ReactPage({ initialBlogs }) { return <Page initialBlogs={initialBlogs} />; }
