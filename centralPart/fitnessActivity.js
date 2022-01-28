export const fitnessA = {
    rows:[
        {
        cols: [
            {
                view: "label",
                label: "Fitness activity",
                width: 76
            },
            {},
            {
                view:"richselect",
              //  label:"richselect", 
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
      //  height:170,
        type:"splineArea",
        value:"#steps#",
        css:"myClass",
        /*color: function(obj){
      return linear-gradient("#1293f8", "#ffffff");
        },*/
        alpha:0.6,
        item:{
          //borderColor: "#1293f8",
          //color: "#ffffff"
        },
        line:{
          color:"#1293f8",
          width:8,
          shadow:true,
        },
        xAxis:{
          template:"'#day#"
        },
        offset:0,
        yAxis:{
          start:0,
          end:11000,
          step:2000,
          template:function(obj){
            return (obj%20?"":obj)
          }
        },
        data: [
          { id:1, steps:8000, day:"Monday"},
          { id:2, steps:5000, day:"Tuesday"},
          { id:3, steps:4500, day:"Wednesday"},
          { id:4, steps:7800, day:"Thursday"},
          { id:5, steps:3200, day:"Friday"},
          { id:6, steps:9500, day:"Saturday"},
          { id:7, steps:8000, day:"Sunday"},
      
      ]
      }
    ]

}