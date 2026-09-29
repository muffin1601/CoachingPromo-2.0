import { permanentRedirect } from 'next/navigation';
export default async function Page({ params }) { permanentRedirect("/blogs/" + encodeURIComponent((await params).slug)); }
