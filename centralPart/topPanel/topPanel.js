import {todayP} from './todayP.js';
import {daylyI} from './dailyIndicators.js';

export const topPanel = {
    type: 'space',
    css:"mainPart",
    height:140,
          cols: [
              todayP,
              daylyI
          ],
};