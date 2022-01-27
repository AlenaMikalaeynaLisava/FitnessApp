import {dataSidebarMenu} from "../data/dataSidebarMenu.js";

export const sidebarMenu = {
	view: "sidebar",
	css: "webix_dark sidebarMenu",
	gravity: 31,
	select: true,
	//height: 188,
	data: dataSidebarMenu,
	ready() {
		this.select(1);
	}
};