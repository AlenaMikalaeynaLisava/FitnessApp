export const fitnessA = {
    rows:[
        {
          height:30,
          css:"yourGoals  listText",
        cols: [
            {
                view: "label",
                label: "Fitness activity",
                width: 106,
                
            },
            {},
            {
                view:"richselect",
                value:1, 
                yCount:"3", 
                options:[ 
                    {id:0, value:"Month"}, // изначально выбранный элемент
                    {id:1, value:"Week"}, 
                    {id:2, value:"Day"}
                ]
            }
        ]
    },
    {
        view:"chart",
        width:300,
        type:"splineArea",
        value:"#steps#",
       color:"#2F285A",
        alpha:0.8,
        padding:{
          top: 0,
          right: 10,
          bottom: 20,
          left:35
      },
        border: true,
			borderColor: "#8666C5",
			borderWidth: 2,
        xAxis:{
          template:"#day#",
          color:"#22292E",
          lines:false
        },
        yAxis:{
          start:0,
          end:11000,
          step:2000,
          color:"#22292E",
          lines:false
        },
        data: [
          { id:1, steps:8000, day:"Mon"},
          { id:2, steps:5000, day:"Tue"},
          { id:3, steps:4500, day:"Wed"},
          { id:4, steps:7800, day:"Thu"},
          { id:5, steps:3200, day:"Fri"},
          { id:6, steps:9500, day:"Sat"},
          { id:7, steps:8000, day:"Sun"},
      
      ]
      }
    ]

}