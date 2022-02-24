import {sidebar} from './sideBar/sidebar.js';
import {centralPart} from './centralPart/centralpart.js'

export const mainPart = {
        gravity: 18,
        cols: [
           sidebar,
           centralPart
        ],
  };