import{training} from'./training.js';
import{heartR} from'./heartRate.js';
export const bottomPanel = {
    type: 'space',
    css:"mainPart",
        height:180,
           // gravity: 12,
            cols: [
                training,
      heartR
            ],
};