export const training = {
    type:"clean",
    rows:[
        {
            view: "template",
            template: "training"
          },
 {cols:[
    { view:"icon", icon:"webix_icon wxi-angle-left", align:"left"},
     {
        view:"list",
        //icon fire
        template:'<img style="height:20px;" src=#src#></img> <span> #title#, #indicator#</span>',
        data:[
            { id:1, src:"./icons/smallSmile/smallSmile.png", title:"Weight lose", indicator:"8.3 hr"},
            { id:2, src:"./icons/smallSmile/smallFood.png", title:"Meal plan", indicator:"8.3 hr"},
            { id:3, src:"./icons/smallSmile/smallSteps.png", title:"Steps", indicator:"8.3 hr"},
            { id:4, src:"./icons/smallSmile/smallYoga.png", title:"Yoga", indicator:"8.3 hr"},
            { id:5, src:"./icons/smallSmile/smallApple.png", title:"Fruit", indicator:"8.3 hr"},
            { id:6, src:"./icons/smallSmile/smallDrop.png", title:"Water", indicator:"8.3 hr"},
            { id:7, src:"./icons/smallSmile/smallSleep.png", title:"Sleep", indicator:"8.3 hr"},
        ]
      },
      { view:"icon", icon:"webix_icon wxi-angle-right", align:"left"}
 ]}
 
    ]

}