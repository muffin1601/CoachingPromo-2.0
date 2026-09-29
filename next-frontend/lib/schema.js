import { siteUrl } from "@/lib/api";
export function jsonLd(data) { return { __html: JSON.stringify(data) }; }
export const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: "CoachingPromo", url: siteUrl, telephone: "+918750708222", email: "sales@coachingpromo.in" };
export function breadcrumbs(items) { return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })) }; }
