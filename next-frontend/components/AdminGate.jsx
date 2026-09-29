"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/react-source/context/AuthContext';
export default function AdminGate({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const allowed = user?.role === 'admin' || user?.isAdmin === true;
  useEffect(() => { if (!loading && !allowed) router.replace('/login'); }, [loading, allowed, router]);
  return !loading && allowed ? children : <p role="status">Checking access…</p>;
}
