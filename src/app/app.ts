import getRandomImage from './utils/get-random-image';

export function run(): void {
  const imgHolder = document.getElementById('background-img');

  getRandomImage()
    .then(res => res.json())
    .then(img => {
      console.log(img);
      if (imgHolder) imgHolder.style.backgroundImage = `url(${img.urls.full})`;
      // .then(json => console.log(JSON.stringify(json)));
    });
}
