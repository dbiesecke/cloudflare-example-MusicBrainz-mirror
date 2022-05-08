import useProxy from 'rocket-booster';
import redirector from 'lilredirector'

const redirects = [
  {
    path: "/twitter",
    redirect: "https://twitter.com/signalnerve",
  },
  {
    path: "/yt",
    redirect: "https://www.youtube.com/c/bytesizedxyz",
  },
]


addEventListener('fetch', (event) => {
  const { response1, error } = redirector(event, redirects)
  if (response1) return response
      
  const proxy = useProxy();
  proxy.use('/mb/', {
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
  
  //const 
  const response = proxy.apply(event.request);
  event.respondWith(handler(event));
//   event.respondWith(response);
});





//const ORIGIN = "home.forward.pw"
async function handler(event) {
  const { response, error } = await redirector(event, redirects)
  if (response) return response


// const { request, error }
  // Optionally, return an error response
  if (error) return error

  // Other workers code
}
