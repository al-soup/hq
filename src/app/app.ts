import getRandomImage from './utils/get-random-image';
import setBackground from './utils/set-background';

export function run(): void {
  const imgHolder = document.getElementById('background-img');
  const defaultImg =
    'https://images.unsplash.com/photo-1572464699336-3c5d1d51078c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMjY2NH0';

  getRandomImage()
    .then(res => {
      switch (res.status) {
        case 200:
          return res.json();
        case 403:
          throw new Error('Exceed rate limit');
        default:
          throw new Error('API Error');
      }
    })
    .then(img => {
      console.log(img);
      setBackground(imgHolder, img.urls.full);
    })
    .catch(err => {
      console.error(err);
      setBackground(imgHolder, defaultImg);
    });
}
