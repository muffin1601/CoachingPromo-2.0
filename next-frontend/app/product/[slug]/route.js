import { NextResponse } from 'next/server';
import { getProduct, productHref } from '@/lib/api';
export async function GET(request, { params }) {
  const { slug } = await params;
  const data = await getProduct(slug);
  const product = data?.product;
  if (!product?.category?.slug || !product?.subcategory?.slug || product.isActive === false) {
    return new Response('Product not found', { status: 404 });
  }
  return NextResponse.redirect(new URL(productHref(product), request.url), 308);
}
