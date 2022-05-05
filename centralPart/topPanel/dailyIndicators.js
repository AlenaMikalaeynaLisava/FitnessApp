import {dataDaylyIndicators} from "../../data/dataSidebarMenu.js";

export const daylyI = {
  gravity: 7,
    view:"dataview",   
    css:"mainPart borderLess daily",   
    xCount:5,
    select:true,
    type: {
      height:152,
      width:192,
    },
    template: function (obj) {
      return `<div class="temp">
      <img style="height:64px;" src=${obj.src}></img>
      <div>
      <div style="color:rgba(255, 255, 255, 0.8)"> ${obj.title}</div> 
      <div style="color:${obj.color}">${obj.indicator}</div>
      </div>
      </div>`
  },
    data:dataDaylyIndicators
}