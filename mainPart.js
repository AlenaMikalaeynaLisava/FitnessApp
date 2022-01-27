import {sidebar} from './sideBar/sidebar.js';
import {topbar} from './topbar.js';
import {todayP} from './todayP.js';
import {daylyI} from './dailyIndicators.js';
import {yourGoals} from './yourGoals.js';
import {fitnessA} from './fitnessActivity.js';
import {workoutS} from './workoutS.js';
import{training} from'./training.js';
import{heartR} from'./heartRate.js';

export const mainPart = {
        gravity: 19,
        //type: 'clean',
        cols: [
           sidebar,
          {
            gravity: 4,
          //  type: 'space',
            //margin:20,
            rows: [
				topbar,
              {
                height:180,
                //gravity: 5,
                cols: [
					todayP,
					daylyI
                ],
              },
              {
                height:180,
               // gravity: 10,
                cols: [
					yourGoals,
					fitnessA,
					workoutS
                ],
              },
              {
                height:180,
               // gravity: 12,
                cols: [
					training,
          heartR
                ],
              },
            ],
          },
        ],
      
  };