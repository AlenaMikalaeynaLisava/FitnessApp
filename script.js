import {header} from './header.js';
import {mainPart} from './mainPart.js'


webix.ready(() => {
  if (!webix.env.touch && webix.env.scrollSize)
  webix.CustomScroll.init();

  webix.ui({
      rows: [
        header,
        mainPart,
      ],
  });
});
