import {header} from './header.js';
import {mainPart} from './mainPart.js'


webix.ready(() => {
if (!webix.env.touch && webix.env.scrollSize)
webix.CustomScroll.init();

webix.ui({
  view:"scrollview", 
  scroll:"xy",
    body:{
    rows: [
      header,
      mainPart,
    ],
  }
});
});
