const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://csa-uk-website-iota.vercel.app';

export default SITE_URL;
