export const heartR = {
  view:"scrollview", 
  body:{
    rows:[
        {
          css:"yourGoals  listText",
          height:44,
          width:400,
        cols: [
            {
              css:"yourGoals",
                view: "label",
                label: "Heart rate",
                width: 70
            },
            {},
            {
                view:"richselect",
                value:1, 
                yCount:"3", 
                options:[ 
                    {id:0, value:"Yesterday"}, // изначально выбранный элемент
                    {id:1, value:"Today"}, 
                    {id:2, value:"Tomorrow"}
                ]
            }
        ]
    },
    {
        view:"chart",
        css:"yourGoals  listText",
        width:400,
        height: 307,
        type:"splineArea",
        value:"#puls#",
        alpha:0.8,
          border: true,
borderColor: "#EB2217",
borderWidth: 2,
        line:{
          color:"#CC516A",
          lines:false   
        },
        xAxis:{
          template:"#time#",
    color:"#22292E",
    lines:false
        },
        offset:0,
        yAxis:{
          start:50,
         end:170,
          step:20,
    color:"#22292E",
    lines:false
        },
        tooltip:{
          template:`<div>#time#</div><div>#puls# bpm</div>` 
      },
        data: [
          { id:1, puls:100, time:"12 pm"},
          { id:2, puls:80, time:"1 pm"},
          { id:3, puls:70, time:"2 pm"},
          { id:4, puls:60, time:"3 pm"},
          { id:5, puls:70, time:"4 pm"},
          { id:6, puls:115, time:"5 pm"},
          { id:7, puls:70, time:"6 pm"},
          { id:8, puls:70, time:"7 pm"},
          { id:0, puls:80, time:"8 pm"},
          { id:10, puls:80, time:"9 pm"},
          { id:11, puls:60, time:"10 pm"},
      
      ]
      }
    ]
  }
}
