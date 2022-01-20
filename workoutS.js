export const workoutS = {
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
    {cols:[
        {
        
			view: "chart",
			type: "donut",
			value: "#sales#",
			color: "#color#",
			padding: 30,
			radius:40,
			border:false,
			innerRadius: 20,
			lineColor:"#ee3639",
			donutInnerText: "80",
			legend: {
				layout: "y",
				width: 120,
				toggle: false,
				values: [
					{text: "84h very productive", color: "#8664C6"}
				],
				marker: {type: "round", width: 4, height: 4},
				valign: "middle",
				align: "right"
			},
			data: [
	{ sales:"20", month:"Jan", color: "#ee3639" },
	{ sales:"80", month:"Fen", color: "#ee9e36" },
            ]
        
    },
{
    view:"list",
    width:250,
    height:200,
    scroll:false,
    template:function(obj){
                      const html = `
                          <div class="completeWrapp">
                              <span class="completeBar" style="width:${obj.complete}%"></span>
                          </div>
                          <div class="completeVal">${obj.complete}%</div>
                      `;
                      return html;
                  
  },
    select:true,
    data:[
      {id: 1, image: "01-e-learning.png", rating: 5, title: "E-Learning and Digital Cultures", start: "Jan 14, 2021", finish: "Mar 12, 2021", complete: 81},
      {id: 2, image: "02-excel-skills.png", rating: 4, title: "Excel Skills for Busines", start: "Feb 14, 2021", finish: "Apr 08, 2021", complete: 45},
      {id: 3, image: "03-principle-of-computing.png", rating: 4, title: "Principle of Computing", start: "Mar 14, 2021", finish: "May 22, 2021", complete: 26},
      {id: 4, image: "04-career-success.png", rating: 5, title: "Career Success", start: "Feb 27, 2021", finish: "May 25, 2021", complete: 34},
      {id: 5, image: "03-principle-of-computing.png", rating: 5, title: "Principle of Computing (Level 2)", start: "May 27, 2021", finish: "Jul 25, 2021", complete: 10}
  ]
}
    ]}
   
]
}