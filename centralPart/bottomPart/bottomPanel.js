import{training} from'./training.js';
import{heartR} from'./heartRate.js';
export const bottomPanel = {
    view:"scrollview", 
    scroll:"xy",
    gravity: 7,
    body:{
    type: 'space',
    css:"mainPart",
      //  height:180,
            
            cols: [
                training,
      heartR
            ],
        }
};