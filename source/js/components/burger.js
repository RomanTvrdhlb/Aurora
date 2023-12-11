import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleCustomClass, removeCustomClass, toggleClassInArray, removeClassInArray} from '../functions/customFunctions';
const {overlay, burgers, mobileMenu, header} = vars;

const mobileMenuHandler = function(overlay, mobileMenu, burgers) {
  burgers.forEach(burger => {
    burger.addEventListener('click', function(e){
      e.preventDefault();
      toggleCustomClass(header, 'active')
      toggleCustomClass(mobileMenu);
      toggleClassInArray(burgers);
      toggleCustomClass(overlay);
      burger.classList.contains('active') ? disableScroll() : enableScroll()
    })
  });
}

const hideMenuHandler = function(overlay, mobileMenu, burgers) {
    removeCustomClass(mobileMenu);
    removeClassInArray(burgers);
    removeCustomClass(header, 'active');
    removeCustomClass(overlay);
    enableScroll()
}

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burgers);
  overlay.addEventListener('click', function(e){
    e.target.classList.contains('overlay') ?
    hideMenuHandler(overlay,mobileMenu,burgers) : null
  });
}





