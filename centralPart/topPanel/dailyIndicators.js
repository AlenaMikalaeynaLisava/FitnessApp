export const daylyI = {
  gravity:4,
    view:"dataview",   
    css:"topColor1",     
    xCount:4,
    select:true,
    type: {
      height:120,
      width:"auto",
    },
    template: function (obj) {
      return `<div class="temp">
      <img style="height:40px;" src=${obj.src}></img>
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