import {todayP} from './todayP.js';
import {daylyI} from './dailyIndicators.js';

export const topPanel = {
    view:"scrollview", 
    scroll:"xy",
    gravity: 5,
    // type: 'space',
     css:"mainPart",
    body:{

   // scroll:"xy",
    //maxHeight:152,
    //maxWidth:1352,
          cols: [
              todayP,
              daylyI
          ],
        }
};