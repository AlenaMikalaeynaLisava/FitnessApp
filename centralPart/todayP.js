export const todayP = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			//height: 40,
			margin: 16,
			cols: [
				{
					view: "label",
					label: "Productivity score"
				},
				{}
			]
		},
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
		}
	]
};