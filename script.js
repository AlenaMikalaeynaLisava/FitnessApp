import {header} from './header.js';
import {userCard} from './userCard.js';
import {sidebarMenu} from './sidebarMenu.js';
import {topbar} from './topbar.js';
import {todayP} from './todayP.js';
import {daylyI} from './dailyIndicators.js';
import {yourGoals} from './yourGoals.js';
import {fitnessA} from './fitnessActivity.js';
import {workoutS} from './workoutS.js';
import{training} from'./training.js';

webix.ready(function() {
  webix.ui({
    rows: [
      header,
      {
        gravity: 14,
        type: 'clean',
        cols: [
          {
            gravity: 1,
            rows: [
              userCard,
              sidebarMenu,
            //  {},
            ],
          },
          // sidebar
          {
            gravity: 4,
            type: 'space',
            rows: [
				topbar,
              {
                gravity: 3,
                cols: [
					todayP,
					daylyI
                ],
              },
              {
                gravity: 4,
                cols: [
					yourGoals,
					fitnessA,
					workoutS
                ],
              },
              {
                gravity: 4,
                cols: [
					training,
                  {rows: [
                    {template: 'toolbar'},
                    {template: 'chart'},
                  ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
});
