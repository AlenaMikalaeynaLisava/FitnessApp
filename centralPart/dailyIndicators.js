export const daylyI = {
    view:"dataview",       
   // height:120,
    xCount:4,
    select:true,
    type: {
      height: 80,
      width:"auto"
    },
    template:'<img style="height:40px;" src=#src#></img> <span> #title#, #indicator#</span>',
    data:[
      { id:1, src:"./icons/sleep.png", title:"Sleep", indicator:"8.3 hr"},
      { id:2, src:"./icons/steps.png", title:"Steps", indicator:"8.3 hr"},
      { id:3, src:"./icons/water.png", title:"Water", indicator:"8.3 hr"},
      { id:4, src:"./icons/food.png", title:"Food", indicator:"8.3 hr"},
      { id:5, src:"./icons/heart.png", title:"Heart", indicator:"8.3 hr"},
    ]

}