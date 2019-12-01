export default function setBackground(el: HTMLElement | null, imgUrl: string): void {
  if (el && imgUrl) {
    el.style.backgroundImage = `url(${imgUrl})`;
  }
  return;
}
