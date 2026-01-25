export default function sitemap() {
  const baseUrl = 'https://malolacosmictech.com';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/blogs',
    '/team',
    '/careers',
    '/investors',
    '/products/malola',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
