export const fitnessA = {
  width:608,
    rows:[
        {
          height:44,
          width:608,
          css:"yourGoals  listText fitnrssA .yourG",
        cols: [
            {
                view: "label",
                label: "Fitness activity",
                width: 106,
                
            },
            {},
            {
                view:"richselect",
                css:"fontClass",
                width:74,
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
        tooltip:{
          template:`<div>#data#</div><div>#steps# steps</div>` 
      },
        data: [
          { id:1, steps:8000, day:"Mon", data:"13 June 2022"},
          { id:2, steps:5000, day:"Tue", data:"14 June 2022"},
          { id:3, steps:4500, day:"Wed", data:"15 June 2022"},
          { id:4, steps:7800, day:"Thu", data:"16 June 2022"},
          { id:5, steps:3200, day:"Fri", data:"17 June 2022"},
          { id:6, steps:9500, day:"Sat", data:"18 June 2022"},
          { id:7, steps:8000, day:"Sun", data:"19 June 2022"},
      
      ]
      }
    ]

}