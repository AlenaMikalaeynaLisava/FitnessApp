export const heartR = {
    width:300,
    rows:[
        {
        cols: [
            {
                view: "label",
                label: "Heart rate",
                width: 70
            },
            {},
            {
                view:"richselect",
              //  label:"richselect", 
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
        width:300,
        height:120,
        type:"splineArea",
        value:"#puls#",
       // css:"myClass",
        alpha:0.6,
        item:{
          //borderColor: "#1293f8",
          //color: "#ffffff"
        },
        line:{
          color:"#EB2217",
          width:8,
          shadow:true,
        },
        xAxis:{
          template:"#time#"
        },
        offset:0,
        yAxis:{
          start:50,
          end:170,
          step:20,
        },
        tooltip:{
            template: "#puls#"
          },
        data: [
          { id:1, puls:100, time:"12 pm"},
          { id:2, puls:80, time:"1 pm"},
          { id:3, puls:70, time:"2 pm"},
          { id:4, puls:120, time:"3 pm"},
          { id:5, puls:70, time:"4 pm"},
          { id:6, puls:95, time:"5 pm"},
          { id:7, puls:130, time:"6 pm"},
          { id:8, puls:70, time:"7 pm"},
          { id:0, puls:80, time:"8 pm"},
          { id:10, puls:80, time:"9 pm"},
          { id:11, puls:60, time:"10 pm"},
      
      ]
      }
    ]

}