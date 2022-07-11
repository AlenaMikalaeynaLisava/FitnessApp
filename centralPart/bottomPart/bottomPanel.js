import{training} from'./training.js';
import{heartR} from'./heartRate.js';
export const bottomPanel = {
//view:"scrollview", 
//css:"mainPart",
//scroll:"xy",
//body:{
css:"mainPart",
type: 'space',    
cols: [
training,
heartR
],
//}
};