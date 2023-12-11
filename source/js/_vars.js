export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  timers: document.querySelectorAll('.h2o-timer'),
  header: document.querySelector('header'),
  overlay: document.querySelector('[data-overlay]'),
  mobileMenu: document.querySelector('.mobile-menu'),
  burgers: document.querySelectorAll('.burger'),
  mainSlider: document.querySelector('.h2o-main-slider'),
  casinoSlider: document.querySelector('.h2o-casino-slider'),
  jackpotSlider: document.querySelector('.h2o-jackpot-slider'),
  accParrent: [...document.querySelectorAll('[data-accordion-init]')],
}





