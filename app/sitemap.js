export default function sitemap() {
  const baseUrl = 'https://prabas.co';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/blogs',
    '/team',
    '/careers',
    '/investors',
    '/products/zekkers',
    '/products/tioras',
    '/products/govtnaukri4u',
    '/products/malola',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
