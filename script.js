import {header} from './header.js';
import {mainPart} from './mainPart.js'

webix.ready(function() {
  webix.ui({
    css:"basicStyle",
    rows: [
      header,
      mainPart
    ],
  });
});
