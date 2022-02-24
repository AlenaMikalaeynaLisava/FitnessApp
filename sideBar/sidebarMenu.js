import {dataSidebarMenu} from "../data/dataSidebarMenu.js";

export const sidebarMenu = {
	view: "sidebar",
	css: "dark",
	scroll:"y",
	select: true,
	//height: 188,
	data: dataSidebarMenu,
	ready() {
		this.select(1);
	}
};