export const workoutS = {
    width:400,
    css:"col",
    rows:[
        {
            height:30,
            css:"yourGoals  listText",
        cols: [
            {
                view: "label",
                label: "Workout statistics",
                //width: 76
            },
            {
                view:"richselect",
                css:"fontClass",
                value:1, 
                width:78,
                //inputWidth:51,
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
     
        cols:[
        {
            height:235,
            width:240,
        
			view: "chart",
			type: "donut",
            padding:{
                left:20,
                top:20
            },
			value: "#sales#",
			color: "#color#",
			//radius:60,
            radius:95,
			border:false,
			//innerRadius: 45,
            innerRadius: 75,
			lineColor:"#F4AB5C",
			donutInnerText: `<div>
            <span style='font-size: 48px;' class='mdi mdi-fire yel'></span>
            <div><span style='font-size: 20px;'>350</span> Calories</div>
            <div><span style='font-size: 20px;'>35</span> min</div>
            </div>`,
			data: [
	{ sales:"20", month:"Jan", color: "#595E62" },
	{ sales:"80", month:"Fen", color:"#F4AB5C"},
            ]
        
    },
{
    view:"list",
    css:"listW",
    width:150,
    height: 150,
    scroll:false,
    template:function(obj){
                      const html = `
                      <div class="completeVal1">
                      <span> ${obj.name}</span>
                      <span> ${obj.timing}</span>
                      </div>
                          <div class="completeWrapp completeWrapp1">
                              <span class="completeBar1" style="width:${obj.complete}%"></span>
                          </div>                      
                      `;
                      return html;
                  
  },
    select:true,
    data:[
      {id: 1, name:"VO 2 max", timing:"5 min", complete: 39},
      {id: 2, name:"Anaerobic", timing:"15 min", complete: 73},
      {id: 3, name:"Anaerobic", timing:"10 min", complete: 61},
      {id: 4, name:"Fat burning", timing:"5 min", complete: 39},

  ]
}
    ]}
   
]
}