export const topbar = {
	margin: 10,
  gravity: 1,
	cols: [
		{
			view: "label",
			label: "Dashboard",
			width: 76,
     // height:50,
		},
		{
            view:"richselect",
            css:"topRich",
            width:112,
            value:1, 
            yCount:"3", 
            options:[ 
                {id:0, value:"Yesterday"}, // изначально выбранный элемент
                {id:1, value:"Today"}, 
                {id:2, value:"Tomorrow"}
            ]
        }, 
        {}
	]
};