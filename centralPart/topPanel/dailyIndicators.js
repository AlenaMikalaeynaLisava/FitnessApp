export const daylyI = {
  gravity: 7,
    view:"dataview",   
    css:"mainPart borderLess",   
    //scroll:false,  //why?
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
    data:[
      { id:1, src:"./icons/sleep.png", title:"Sleep", indicator:"8.3 hr", color:"#FFCB47"},
      { id:2, src:"./icons/steps.png", title:"Steps", indicator:"8.3 hr", color:"#7A67EB"},
      { id:3, src:"./icons/water.png", title:"Water", indicator:"8.3 hr", color:"#37A9EF"},
      { id:4, src:"./icons/food.png", title:"Food", indicator:"8.3 hr", color:"#77D257"},
      { id:5, src:"./icons/heart.png", title:"Heart", indicator:"8.3 hr", color:"#FE6158"},
    ]

}