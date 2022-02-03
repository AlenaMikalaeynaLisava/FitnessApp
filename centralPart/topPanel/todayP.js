export const todayP = {
	gravity:1,
			cols: [
				{
					css:"topColor",
					template: "<div style='color: #FFFFFF;'>Today's plan</div><div style='color:  rgba(255, 255, 255, 0.7);'>4 of 5 complated</div>"
				},
			
		{
			css:"webix_dark", 
			view: "chart",
			type: "donut",
			borderColor:"#000000",
			value: "#sales#",
			color: "#color#",
			padding: 30,
			radius:60,
			border:false,
			innerRadius: 40,
			lineColor:"#7A67EB",
			donutInnerText: "<span style='color:#7A67EB; font-size: 24px; line-height: 20px;'>80 %</span>",
			data: [
	{ sales:"80", month:"Jan", color: "#7A67EB" },
	{ sales:"20", month:"Fen", color: "rgba(255, 255, 255, 0.25)" },
]
		}
	]
};