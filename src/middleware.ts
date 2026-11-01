import { defineMiddleware } from 'astro:middleware';

// Links that leave this page open in a new tab, including those written as HTML in
// src/data/profile.ts. Links to sections of the page and to email stay as they are.
const leavesPage = /<a\s(?=[^>]*\bhref\s*=\s*"(?:https?:|\/teaching-learning\/))/g;

export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;

  const html = await response.text();
  return new Response(html.replace(leavesPage, '$&target="_blank" rel="noopener noreferrer" '), response);
});
