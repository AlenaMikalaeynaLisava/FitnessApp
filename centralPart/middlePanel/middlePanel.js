import {yourGoals} from './yourGoals.js';
import {fitnessA} from './fitnessActivity.js';
import {workoutS} from './workoutS.js';
export const middlePanel = {
    type: 'space',
    paddingX:0,
    css:"mainPart",
    //gravity:8,
       // height:180,
        cols: [
            yourGoals,
            fitnessA,
            workoutS
        ],
};