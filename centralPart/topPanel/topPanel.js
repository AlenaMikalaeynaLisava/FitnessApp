import {todayP} from './todayP.js';
import {daylyI} from './dailyIndicators.js';

export const topPanel = {
    view:"scrollview", 
   scroll:"xy",
   css:"mainPart1", 
 height:152,
    body:{
      type: "wide",
          cols: [
              todayP,
              daylyI
          ],
        }
};