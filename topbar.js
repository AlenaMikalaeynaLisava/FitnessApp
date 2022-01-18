export const topbar = {
	margin: 10,
	cols: [
		{
			view: "label",
			label: "Dashboard",
			width: 76
		},
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
};