import {dataTraining} from "../../data/dataSidebarMenu.js";

export const training = {
    css:"yourGoals s12",
    rows:[
        {
            css:"yourGoals  listText borderB",
            view: "template",
            template: "Training",
            height:44,
          },
 {
  width:936,//902
     cols:[
    { view:"icon", icon:"webix_icon wxi-angle-left", align:"left", height:307},
      {
       view:"dataview", 
       css:"colorB",   
       width:854,  
       height: 307,
       xCount:3,
       select:true,
       type: {
         height:260,
         width:285,//248, 
         css:"mainPart",
         type: "tiles",
       },
        template: function (obj) {
          return `<div>
          <img src=${obj.src} style='width:160, height:230'></img>
          <div class="fl"> 
          <div>
          <div class="objTit">${obj.title}</div>
          <span class="objRst"><span class="mdi mdi-clock-outline">${obj.time}</span> 
          <span class="mdi mdi-fire">${obj.calories}</span></span>
          </div>
          <span class="objFire mdi mdi-play-circle-outline"></span>
          </div>
          </div>
          `
      },
      data:dataTraining
      },
      { view:"icon", icon:"webix_icon wxi-angle-right", align:"left"}
 ]}
 
    ]

}