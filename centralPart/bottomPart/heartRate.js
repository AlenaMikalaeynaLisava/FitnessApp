export const heartR = {
    width:300,
    height:307,
    rows:[
        {
          css:"yourGoals  listText",
          height:30,
        cols: [
            {
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
        scroll:"y",
        width:300,
        height: 307,
        type:"splineArea",
        value:"#puls#",
        alpha:0.8,
          border: true,
borderColor: "#EB2217",
borderWidth: 2,
        item:{
          //borderColor: "#1293f8",
          //color: "#ffffff"
        },
        line:{
          color:"#CC516A",
          //width:8,
          lines:false
          //     
//     color:"#22292E",
//     
        },
        xAxis:{
          template:"#time#",
    color:"#22292E",
    lines:false
        },
        offset:0,
        yAxis:{
          start:50,
         // end:170,
         end:120,
          step:20,
    color:"#22292E",
    lines:false
        },
        // tooltip:{
        //     template: "#puls#"
        //   },
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
// {
//   view:"chart",
//   width:300,
//   type:"splineArea",
//   value:"#steps#",
//  color:"#2F285A",
//   alpha:0.8,
//   padding:{
//     top: 0,
//     right: 10,
//     bottom: 20,
//     left:35
// },
//   border: true,
// borderColor: "#8666C5",
// borderWidth: 2,
//   xAxis:{
//     template:"#day#",
//     color:"#22292E",
//     lines:false
//   },
//   yAxis:{
//     start:0,
//     end:11000,
//     step:2000,
//     color:"#22292E",
//     lines:false
//   },
//   data: [
//     { id:1, steps:8000, day:"Mon"},
//     { id:2, steps:5000, day:"Tue"},
//     { id:3, steps:4500, day:"Wed"},
//     { id:4, steps:7800, day:"Thu"},
//     { id:5, steps:3200, day:"Fri"},
//     { id:6, steps:9500, day:"Sat"},
//     { id:7, steps:8000, day:"Sun"},

// ]
// }