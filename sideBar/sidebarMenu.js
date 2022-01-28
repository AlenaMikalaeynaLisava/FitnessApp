import {dataSidebarMenu} from "../data/dataSidebarMenu.js";

export const sidebarMenu = {
	view: "sidebar",
	css: "sidebarMenu",
	//scroll:"y",
	gravity: 31,
	select: true,
	//height: 188,
	data: dataSidebarMenu,
	ready() {
		this.select(1);
	}
};