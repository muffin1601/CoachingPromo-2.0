"use client";

import SubcategoryPage from '@/react-source/pages/SubcategoryPage';

// Render the SEO landing page in the initial response instead of swapping a
// loading paragraph for the full catalogue after first paint.
export default function ReactPage({ initialData }) {
  return <SubcategoryPage initialData={initialData} />;
}
