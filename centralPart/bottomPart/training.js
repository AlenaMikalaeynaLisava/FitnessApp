export const training = {
    //type:"clean",
    //height:180,
    css:"yourGoals",
    rows:[
        {
            css:"yourGoals  listText",
            view: "template",
            template: "Training",
            height:30,
            //gravity: 1,
          },
 {
    height:100,
     cols:[
    { view:"icon", icon:"webix_icon wxi-angle-left", align:"left"},
    //  {
    //     view:"list",
    //     layout:"x",
    //     scroll:false,
    //     type:{
    //         height:150
    //     },
    //     template:`<div style="height:120px;">
    //     <img style="height:30px;" src=#src#></img>
    //     <div>#title#</div>
    //     <span><span class='mdi mdi-clock-outline'>#time#</span> 
    //     <span class='mdi mdi-fire'>#calories#</span>
    //     <span style="line-height:30px;" class="mdi mdi-play-circle-outline"></span>
    //     </div>
    //     `,
    //     data:[
    //         { id:1, src:"./images/Running.png", title:"Running", time:"8.3 hr", calories:"300 kkal"},
    //         { id:2, src:"./images/Yoga.png", title:"Yoga", time:"8.3 hr", calories:"100 kkal"},
    //         { id:3, src:"./images/Poverup.png", title:"Pover up", time:"8.3 hr", calories:"200 kkal"},
    //     ]
    //   },
      {
       // gravity:4,
       view:"dataview",   
       css:"topColor1",   
       scroll:false,  
       xCount:3,
       select:true,
       type: {
         height:120,
         width:"auto",
       },
        template: function (obj) {
          return `<div>
          <img src=${obj.src}></img>
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
      data:[
        { id:1, src:"./images/Running.png", title:"Running", time:"8.3 hr", calories:"300 kkal"},
        { id:2, src:"./images/Yoga.png", title:"Yoga", time:"8.3 hr", calories:"100 kkal"},
        { id:3, src:"./images/Poverup.png", title:"Pover up", time:"8.3 hr", calories:"200 kkal"},
    ]
      },
      { view:"icon", icon:"webix_icon wxi-angle-right", align:"left"}
 ]}
 
    ]

}