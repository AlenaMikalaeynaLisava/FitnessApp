import {topbar} from './topbar.js';
import {topPanel} from './topPanel/topPanel.js';
import {middlePanel}from'./middlePanel/middlePanel.js';
import {bottomPanel} from './bottomPart/bottomPanel.js'



export const centralPart = {
    view:"scrollview", 
    scroll:"y",
    body:{
        rows: [
            topbar,
            topPanel,
            middlePanel,
            bottomPanel
        ],
    },
    css: "mainPart",
    gravity: 4,
      //type: 'space',
      margin:0,

};