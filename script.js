import {header} from './header.js';
import {mainPart} from './mainPart.js'


webix.ready(() => {
  if (!webix.env.touch && webix.env.scrollSize)
  webix.CustomScroll.init();

  webix.ui({
    view:"scrollview", 

     body:{
      scroll:"xy",
      height: 1050,
      rows: [
        header,
        mainPart,
      ],
    }
  });
});
