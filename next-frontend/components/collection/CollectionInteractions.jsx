"use client";
import { lazy, Suspense, useCallback, useEffect, useState } from 'react';

const EnquiryModal = lazy(() => import('@/react-source/components/EnquiryModal'));

// Analytics receive only collection/product context, never form values.
function track(event, params) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}

/**
 * Progressive enhancement for a server-rendered collection page:
 * - `[data-quote]` links open the existing quote modal with the requirement
 *   prefilled (without JS they fall back to /contact?quote=1).
 * - `[data-track]` elements send a GA4 event through the existing gtag setup.
 */
export default function CollectionInteractions({ collection, listName, productCount, children }) {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    track('view_item_list', { item_list_id: collection, item_list_name: listName, items_count: productCount });
  }, [collection, listName, productCount]);

  const onClick = useCallback(event => {
    const target = event.target.closest?.('[data-track],[data-quote]');
    if (!target || !event.currentTarget.contains(target)) return;
    const item = target.dataset.item || undefined;
    const kind = target.dataset.track;
    if (kind === 'select_item') track('select_item', { item_list_id: collection, item_list_name: listName, items: item ? [{ item_name: item }] : undefined });
    else if (kind) track(kind, { collection, item_name: item });
    if (target.dataset.quote !== undefined && !event.metaKey && !event.ctrlKey && !event.shiftKey) {
      event.preventDefault();
      setQuote({ productName: target.dataset.quote, item });
    }
  }, [collection, listName]);

  const close = useCallback(() => setQuote(null), []);
  const submitted = useCallback(() => track('generate_lead', { collection, item_name: quote?.item }), [collection, quote]);

  return <div className="cl-page" onClick={onClick}>
    {children}
    {quote && <Suspense fallback={null}>
      <EnquiryModal isOpen onClose={close} onSubmitted={submitted} image="/assets/enquiry.webp" productName={quote.productName} />
    </Suspense>}
  </div>;
}
