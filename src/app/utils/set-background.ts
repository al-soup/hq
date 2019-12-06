export default function setBackground(el: HTMLElement | null, imgUrl: string): void {
  if (el && imgUrl) {
    el.style.background = `url(${imgUrl}) no-repeat center center fixed`;
    el.style.backgroundSize = 'cover';
  }
  return;
}
