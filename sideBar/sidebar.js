import {userCard} from './userCard.js';
import {sidebarMenu} from './sidebarMenu.js';


export const sidebar = {
        gravity: 1,
        rows: [
          userCard,
          sidebarMenu,
         // {gravity: 44},
        ],
};