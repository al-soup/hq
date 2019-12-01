import { unsplashKey } from '../config/dev-config';

export default async function getRandomImage(): Promise<any> {
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape';
  const opts = {
    method: 'get',
    headers: new Headers({
      Authorization: `Client-ID ${unsplashKey}`,
      'Content-Type': 'application/json',
    }),
  };
  return await fetch(url, opts);
}
