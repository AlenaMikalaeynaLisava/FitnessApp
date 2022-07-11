import {dataDaylyIndicators} from "../../data/dataSidebarMenu.js";

export const daylyI = {
  //gravity: 7,
    view:"dataview",   
    select:false,
    css:"mainPart borderLess daily",   
    xCount:5,
    select:true,
    type: {
      height:152,
      width:192,
    },
    template: function (obj) {
      return `<div class="temp">
      <img style="height:64px; width:64px" src=${obj.src}></img>
      <div class="temp2">
      <div style="color:rgba(255, 255, 255, 0.8)"> ${obj.title}</div> 
      <div class="temp2" style="width:78px; color:${obj.color}">${obj.indicator}</div>
      </div>
      </div>`
  },
    data:dataDaylyIndicators
}