export const userCard = {
  view: 'template',
  	css: "dark sidebarUser",
    width:297,
    height:247,
  template(obj) {
     let html = `
            <div class="userWrapp">
                <div class="userImg">
                    <img src="./icons/avatar.png">
                    <span class="userStatus"></span>
                </div>
                <div class="userInfo">
                    <span class="userName">Alisa Epson</span>
                    <span class="userPosition">Weight: <span class="userResult">59&nbsp;kg</span></span>
                    <span class="userPosition">Height: <span class="userResult">5’6”&nbsp;&nbsp;&nbsp;</span></span>
                    <span class="userPosition">Age :<span class="userResult">25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                </div>
            </div>
        `;
    return html;
  },
};
