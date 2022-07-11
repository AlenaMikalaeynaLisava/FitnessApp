import {dataSidebarMenu} from "../data/dataSidebarMenu.js";

export const sidebarMenu = {
	height:311,
	view: "sidebar",
	css: "dark",
	scroll:"y",
	select: true,
	data: dataSidebarMenu,
	ready() {
		this.select(1);
	}
};