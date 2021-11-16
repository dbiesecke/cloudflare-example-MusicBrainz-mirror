import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    loadBalancing: {
        policy: 'random',
    },
    security: {
//      fowarded: true,
      hidePoweredBy: true,
      ieNoOpen: true,
      xssFilter: true,
      noSniff: true,
      setCookie: true,
    },
    upstream: [
        {
        domain: 'musicbrainz.org',
        protocol: 'https',
        weight: 20,
        }
    ],
  });
  const response = proxy.apply(event.request);
  event.respondWith(response);
});
