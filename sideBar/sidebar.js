import {userCard} from './userCard.js';
import {sidebarMenu} from './sidebarMenu.js';


export const sidebar = {
        gravity: 1,
        //width:296,
       // height:995,
        rows: [
          userCard,
          sidebarMenu,
          {
            gravity:1
          }
        ],
};