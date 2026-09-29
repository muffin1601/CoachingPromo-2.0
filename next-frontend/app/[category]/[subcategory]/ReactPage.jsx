"use client";
import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/react-source/pages/SubcategoryPage'), {
  ssr: true, loading: () => <p role="status">Loading…</p>
});
export default function ReactPage({ initialData }) { return <Page initialData={initialData} />; }
