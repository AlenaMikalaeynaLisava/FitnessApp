import {userCard} from './userCard.js';
import {sidebarMenu} from './sidebarMenu.js';


export const sidebar = {  
  css:"dark",
 // height:995,
        rows: [
          {height:19,
          //  css: "noBorder",
          },
          userCard,
          sidebarMenu,
          {
            height:410
          }
        ],
};