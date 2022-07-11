import {topbar} from './topbar.js';
import {topPanel} from './topPanel/topPanel.js';
import {middlePanel}from'./middlePanel/middlePanel.js';
import {bottomPanel} from './bottomPart/bottomPanel.js'



export const centralPart = {
     view:"scrollview", 
     css:"mainPart",
     body:{
     // padding:16,
        rows: [
            topbar,
            topPanel,
            middlePanel,
            bottomPanel
        ],
    },
    css: "mainPart",
};