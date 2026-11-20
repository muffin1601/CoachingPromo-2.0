import { cache } from 'react';
import { getSubcategory, productHref } from './api';

/*
 * Seasonal landing pages are curated views over the live catalogue. Each group
 * points at explicit `category/subcategory` slugs from MongoDB, so no product is
 * duplicated or matched by fuzzy name search. Products come from the existing
 * `/api/subcategories/:category/:subcategory` endpoint, which only returns
 * `isActive: true` records.
 */

export const COLLECTION_BANNER = { src: '/cp_banner.webp', width: 2048, height: 768 };

export const collections = {
  winter: {
    key: 'winter',
    path: '/winter-collection',
    name: 'Winter Collection',
    title: 'Custom Hoodies & Winter Wear for Coaching Institutes | CoachingPromo',
    description: 'Shop custom hoodies, sweatshirts and winter merchandise for coaching institutes, schools and colleges. Explore branded apparel and request a bulk quote.',
    keywords: ['custom hoodies for coaching institutes', 'coaching institute winter wear', 'custom hoodies for students', 'bulk printed hoodies', 'branded winter apparel', 'customized sweatshirts for institutes', 'coaching institute merchandise'],
    h1: 'Custom Winter Merchandise for Coaching Institutes & Schools',
    bannerAlt: 'New Year 2027 and Winter Wear Collection banner showing navy and grey hoodies, a beanie, scarf, bottle, notebook, backpack and mug branded with an institute logo',
    perGroupLimit: 8,
    groups: [
      {
        key: 'hoodies', name: 'Hoodies & Winter Jackets', short: 'Custom hoodies',
        blurb: 'Warm hoodies for student batches, toppers and staff, branded with your logo.',
        sources: ['apparel-accessories/hoodies-jackets'],
      },
      {
        key: 'jackets', name: 'Uniform & Nehru Jackets', short: 'Staff jackets',
        blurb: 'Smart layering jackets for faculty, counsellors and front-desk teams.',
        sources: ['apparel-accessories/uniform-jackets'],
      },
      {
        key: 'polos', name: 'Polo T-Shirts', short: 'Polo T-shirts',
        blurb: 'Collared polos that pair with hoodies for a coordinated institute look.',
        sources: ['apparel-accessories/polo-t-shirts'],
      },
      {
        key: 'tshirts', name: 'Round Neck T-Shirts', short: 'Round neck T-shirts',
        blurb: 'Everyday printed tees to layer under hoodies and jackets.',
        sources: ['apparel-accessories/round-neck-t-shirts'],
      },
    ],
    // Requested groups the catalogue has no subcategory or products for yet.
    unavailable: ['Sweatshirts', 'Full-sleeve / winter T-shirts'],
  },
  newYear: {
    key: 'new-year',
    path: '/new-year-collection',
    name: 'New Year & Winter Collection',
    title: 'New Year Gifts & Winter Wear for Institutes | CoachingPromo',
    description: 'Explore New Year gifts and winter wear for coaching institutes, including custom hoodies, jackets, bags and stationery. Request a bulk quote.',
    keywords: ['New Year gifts for coaching institutes', 'custom New Year merchandise', 'promotional gifts for coaching institutes', 'student welcome kits', 'bulk promotional stationery', 'customized notebooks and pens', 'branded bags for students', 'coaching institute promotional products'],
    h1: 'New Year Gifts & Winter Merchandise for Coaching Institutes',
    bannerAlt: 'New Year 2027 collection banner with institute-branded hoodies, backpack, notebook, pen, bottle and mug for coaching institutes and training centres',
    perGroupLimit: 4,
    groups: [
      {
        key: 'tshirts', name: 'Custom T-Shirts', short: 'T-shirts',
        blurb: 'Round neck and polo tees for orientation days, events and batch identity.',
        sources: ['apparel-accessories/round-neck-t-shirts', 'apparel-accessories/polo-t-shirts'],
        tileHref: '/apparel-accessories/round-neck-t-shirts',
      },
      {
        key: 'hoodies', name: 'Personalized Hoodies', short: 'Hoodies',
        blurb: 'Seasonal hoodies that double as a New Year gift for students and staff.',
        sources: ['apparel-accessories/hoodies-jackets'],
      },
      {
        key: 'jackets', name: 'Uniform & Nehru Jackets', short: 'Staff jackets',
        blurb: 'Smart winter layers for faculty, counsellors and front-desk teams.',
        sources: ['apparel-accessories/uniform-jackets'],
      },
      {
        key: 'bags', name: 'Branded Bags', short: 'Bags',
        blurb: 'Backpacks, tote, jute and messenger bags students carry every day.',
        sources: ['bags/institute-backpacks', 'bags/tote-bag', 'bags/jute-bag', 'bags/messenger-bags'],
        tileHref: '/categories/bags',
      },
      {
        key: 'idcards', name: 'Custom ID Cards', short: 'ID cards',
        blurb: 'Personalised ID cards and lanyards for new admissions and staff.',
        sources: ['stationery/lanyard-and-id-card'],
      },
      {
        key: 'notebooks', name: 'Printed Notebooks', short: 'Notebooks',
        blurb: 'Logo-printed notebooks that students open in every class.',
        sources: ['stationery/notebook'],
      },
      {
        key: 'pens', name: 'Promotional Pens', short: 'Pens',
        blurb: 'Metal, plastic, paper and eco pens for kits and giveaways.',
        sources: ['stationery/customized-pens'],
      },
      {
        key: 'diaries', name: 'Diaries & Planners', short: 'Diaries', related: true,
        blurb: 'Diary sets and planners for faculty gifting and the new academic plan.',
        sources: ['promotional-items/diary-set', 'promotional-items/planner'],
      },
      {
        key: 'calendars', name: 'Wall & Table Calendars', short: 'Calendars', related: true,
        blurb: 'Branded calendars that keep your institute in view all year.',
        sources: ['stationery/wall-calendar', 'stationery/table-calendar'],
      },
    ],
    rows: [
      { title: 'Apparel for new batches', groups: ['tshirts', 'hoodies'] },
      { title: 'Winter layers for staff', groups: ['jackets'] },
      { title: 'Bags and identity essentials', groups: ['bags', 'idcards'] },
      { title: 'Stationery for every student', groups: ['notebooks', 'pens'] },
      { title: 'Year-round reminders of your brand', groups: ['calendars', 'diaries'] },
    ],
    kits: [
      { name: 'Orientation Starter Kit', groups: ['tshirts', 'notebooks', 'pens'], use: 'A simple, high-volume kit for orientation day and new admissions.' },
      { name: 'First-Day Essentials Kit', groups: ['bags', 'idcards', 'notebooks'], use: 'Everything a new student carries into class from day one.' },
      { name: 'Winter Welcome Kit', groups: ['hoodies', 'notebooks', 'pens'], use: 'A warmer welcome for January batches and winter admissions.' },
      { name: 'Complete Batch Kit', groups: ['bags', 'tshirts', 'idcards', 'pens'], use: 'A full identity kit for a batch, branch launch or toppers’ programme.' },
    ],
    unavailable: [],
  },
};

const hasImage = image => image?.url && image.type !== 'video';

/** Local paths are optimised by next/image; remote legacy URLs are left as-is. */
export function productImage(product) {
  const image = product?.images?.find(hasImage);
  if (!image) return null;
  const src = /^https?:\/\//i.test(image.url) ? image.url : image.url.startsWith('/') ? encodeURI(decodeURI(image.url)) : `/uploads/${image.url}`;
  return { src, alt: image.altText || product.name, local: src.startsWith('/') && !src.startsWith('/uploads/') };
}

export function productPrice(product) {
  const price = Number(product?.price);
  const sale = Number(product?.salePrice);
  if (!Number.isFinite(price) || price <= 0) return null;
  return Number.isFinite(sale) && sale > 0 && sale < price ? { current: sale, original: price } : { current: price };
}

const isListable = product => product?.slug && product?.name && product.images?.some(hasImage);

// Cached per request, so a subcategory used by several groups is fetched once.
const loadSubcategory = cache(async (source) => {
  const [category, subcategory] = source.split('/');
  try { return await getSubcategory(category, subcategory); }
  catch { return null; }
});

function interleave(lists) {
  const result = [];
  for (let index = 0; lists.some(list => index < list.length); index += 1) {
    for (const list of lists) if (index < list.length) result.push(list[index]);
  }
  return result;
}

/**
 * Resolves every group of a collection to live products. Groups whose
 * subcategories are missing or empty are dropped and reported in `missing`.
 */
export const getCollectionData = cache(async (key) => {
  const config = Object.values(collections).find(entry => entry.key === key);
  const sources = [...new Set(config.groups.flatMap(group => group.sources))];
  const responses = new Map(await Promise.all(sources.map(async source => [source, await loadSubcategory(source)])));
  const failedSources = sources.filter(source => !responses.get(source));
  const seen = new Set();

  const groups = config.groups.map(group => {
    const parts = group.sources.map(source => {
      const data = responses.get(source);
      if (!data?.subcategory) return { source, products: [] };
      const category = { name: data.category?.name, slug: data.category?.slug };
      const subcategory = { name: data.subcategory.name, slug: data.subcategory.slug };
      const products = (data.products || []).filter(isListable).map(product => ({
        _id: String(product._id), name: product.name.replace(/\s+/g, ' ').trim(), slug: product.slug,
        price: product.price, salePrice: product.salePrice, images: product.images, category, subcategory,
      }));
      return { source, category, subcategory, image: data.subcategory.image, products };
    });
    const all = interleave(parts.map(part => part.products));
    const products = all.slice(0, config.perGroupLimit).map(product => ({ ...product, href: productHref(product) }));
    for (const product of products) seen.add(product._id);
    const primary = parts.find(part => part.subcategory) || {};
    const tileImage = primary.image && primary.image.startsWith('/') ? encodeURI(decodeURI(primary.image)) : productImage(all[0])?.src;
    return {
      ...group,
      products,
      total: all.length,
      links: parts.filter(part => part.subcategory && part.products.length).map(part => ({ name: part.subcategory.name, href: `/${part.category.slug}/${part.subcategory.slug}`, count: part.products.length })),
      href: group.tileHref || (primary.subcategory ? `/${primary.category.slug}/${primary.subcategory.slug}` : null),
      tileImage,
    };
  });

  const available = groups.filter(group => group.products.length);
  return {
    groups: available,
    byKey: Object.fromEntries(available.map(group => [group.key, group])),
    missing: [...groups.filter(group => !group.products.length).map(group => group.name), ...config.unavailable],
    failedSources,
    productCount: seen.size,
    allProducts: available.flatMap(group => group.products),
  };
});

/*
 * 2027 calendar and diary artwork supplied as static files in /public. These are
 * showcase designs (quote-only, no price), not catalogue records, so they are
 * kept out of the ItemList structured data.
 */
const publicPath = path => encodeURI(path);
export const newYear2027Showcase = [
  {
    key: 'calendars-2027', name: '2027 Table Calendars', id: 'showcase-calendars',
    blurb: 'Desk calendar designs for the new year. Share your logo and quantity and we will brand them for your institute.',
    items: [
      { name: 'Table Calendar 2027 – Focus Idea Achieve', src: '/CALENDERS 2027/1/Initial.webp' },
      { name: 'Table Calendar 2027 – Design 2', src: '/CALENDERS 2027/2/Initial.webp' },
      { name: 'Table Calendar 2027 – Design 3', src: '/CALENDERS 2027/3/Initial.webp' },
      { name: 'Compact Stand Table Calendar 2027', src: '/CALENDERS 2027/4/Initial.png' },
      { name: 'Table Calendar 2027 – Dream Big', src: '/CALENDERS 2027/5/Initial.webp' },
      { name: 'Small Table Calendar 2027 with Logo Space', src: '/CALENDERS 2027/6/G-01_1791796940.jpg' },
      { name: 'Eco Easel Desk Calendar 2027', src: '/CALENDERS 2027/7/S-01_1791797062.jpg' },
    ].map(item => ({ ...item, src: publicPath(item.src) })),
  },
  {
    key: 'diaries-2027', name: '2027 Diaries', id: 'showcase-diaries',
    blurb: 'Diaries for faculty gifting and student planning, with your institute branding.',
    items: [
      { name: '2027 Executive Diary – Grey Flap Cover', src: '/2027 diary (1).jpg' },
      { name: '2027 Diary – Design 2', src: '/2027 diary (2).jpg' },
      { name: '2027 Diary – Design 3', src: '/2027 diary (3).jpg' },
      { name: '2027 Diary – Design 4', src: '/2027 diary (4).jpg' },
    ].map(item => ({ ...item, src: publicPath(item.src) })),
  },
];
