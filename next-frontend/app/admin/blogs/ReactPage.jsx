"use client";
import dynamic from 'next/dynamic';
import AdminGate from '@/components/AdminGate';
const Page = dynamic(() => import('@/react-source/pages/Admin/BlogManagerPage'), {
  ssr: false, loading: () => <p role="status">Loading…</p>
});
export default function ReactPage() { return <AdminGate><Page /></AdminGate>; }
