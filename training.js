export const training = {
    //type:"clean",
    height:180,
    rows:[
        {
            view: "template",
            template: "training",
            height:20,
            //gravity: 1,
          },
 {
     //gravity: 18,
    height:160,
     cols:[

    { view:"icon", icon:"webix_icon wxi-angle-left", align:"left"},
     {
         //height:150,
        view:"list",
        layout:"x",
        type:{
            height:150
        },
        //icon fire
        //icon clock-outline
        //play-circle-outline
        template:`<div style="height:120px;">
        <img style="height:30px;" src=#src#></img>
        <div>#title#</div>
        <span><span class='mdi mdi-clock-outline'>#time#</span> 
        <span class='mdi mdi-fire'>#calories#</span></span>
        <span style="line-height:30px;" class="mdi mdi-play-circle-outline"></span>
        </div>
        
        `,
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