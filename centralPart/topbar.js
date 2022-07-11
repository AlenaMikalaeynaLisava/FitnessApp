export const topbar = {
css:"mainPart",
height:64,
//	margin: 10,
 // gravity: 1,
	cols: [
		{
            
			view: "label",
			label: "Dashboard",
            width:78,
            height:32
		},
		{
            view:"richselect",
            width:112,
            inputHeight:32,
            height:32,
            value:2, 
            yCount:"3", 
            options:[ 
                {id:1, value:"Yesterday"}, // изначально выбранный элемент
                {id:2, value:"Today"}, 
                {id:3, value:"Tomorrow"}
            ]
        }, 
        {}
	]
};