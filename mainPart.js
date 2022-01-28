import {sidebar} from './sideBar/sidebar.js';
import {centralPart} from './centralPart/centralpart.js'

export const mainPart = {
        gravity: 19,
        //type: 'clean',,
        cols: [
           sidebar,
           centralPart
     ,
        ],
      
  };