// import { unsplashKey } from 'dev-config';

const getRandomImage = async (): Promise<any> => {
  const url = 'https://api.unsplash.com/photos/random/';
  const opts = {
    method: 'get',
    headers: new Headers({
      Authorization: 'Client-ID ...',
      'Content-Type': 'application/json',
    }),
  };
  return await fetch(url, opts);
};

getRandomImage()
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json)));

// fetch(url, opts)
//     .then(res => res.json())
//     .then(json => console.log(JSON.stringify(json)));
