export const todayP = {
	width:312,
	css:"topColor temp1",
			cols: [
				{
					width:106,
					height:48,
					css:"topColor",
					template: "<div style='color: #FFFFFF;'>Today's plan</div><div style='color:  rgba(255, 255, 255, 0.7);'>4 of 5 complated</div>"
				},
			
		{
			view: "chart",
			type: "donut",
			value: "#sales#",
			color: "#color#",
			padding: 30,
			radius:60,
			innerRadius: 45,
			lineColor:"#7A67EB",
			donutInnerText: "<div style='color:#7A67EB; font-size: 24px;'>80 %</div>",
			data: [
	{ sales:"80", month:"Jan", color: "#7A67EB" },
	{ sales:"20", month:"Fen", color: "rgba(255, 255, 255, 0.25)" },
]
		}
	]
};