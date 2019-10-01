'use strict';

import LazyLoad from 'vanilla-lazyload';

const lazyLoad = new LazyLoad({
  load_delay: 300,
  callback_reveal: (el) => {
    el.parentNode.classList.add('reveal');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // const galleryElems = document.querySelectorAll('.work__images');
  // const sliderElem = document.querySelector('.work__slides');
  // for(const galleryElem of galleryElems) {
  //   new Flickity(galleryElem, {
  //     pageDots: false,
  //     wrapAround: true,
  //     lazyLoad: true,
  //     selectedAttraction: 0.2,
  //     friction: 1
  //   });
  // }
  // if (typeof(sliderElem) != 'undefined' && sliderElem != null) {
  //   new Flickity(sliderElem, {
  //     cellAlign: 'left',
  //     pageDots: false,
  //     contain: true,
  //     lazyLoad: 4
  //   });
  // }
});