// Next App Router owns titles, descriptions, canonicals and JSON-LD on the server.
// Keep this compatibility component for migrated page imports without mutating
// document.head after hydration (which could contradict the server metadata).
export default function PageMeta() {
  return null;
}
