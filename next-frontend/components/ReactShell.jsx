"use client";
import { AuthProvider } from '@/react-source/context/AuthContext';
import { CartProvider } from '@/react-source/context/CartContext';
import { FavoritesProvider } from '@/react-source/context/FavoritesContext';
import StoreLayout from '@/react-source/StoreLayout';
import SourceAnalytics from '@/react-source/SourceAnalytics';
import ScrollToTop from '@/react-source/utils/ScrollToTop';
import { NavigationState } from '@/lib/react-router';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

export default function ReactShell({ children }) {
  const pathname = usePathname();
  return <NavigationState><AuthProvider><FavoritesProvider><CartProvider>
    <div className="cp-store cp-square" data-page={pathname}><ScrollToTop /><StoreLayout>{children}</StoreLayout><ToastContainer position="top-right" /><SourceAnalytics /></div>
  </CartProvider></FavoritesProvider></AuthProvider></NavigationState>;
}
