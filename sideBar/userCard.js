export const userCard = {
  view: 'template',
  	css: "sidebarUser",
      gravity: 25,
  //height: 204,
  template() {
     let html = `
            <div class="userWrapp">
                <div class="userImg">
                    <img src="./icons/avatar.png">
                    <span class="userStatus"></span>
                </div>
                <div class="userInfo">
                    <span class="userName">Alisa Epson</span>
                    <span class="userPosition">Weight: <span style="margin-left: 5px; color: #FFFFFF;">59 kg</span></span>
                    <span class="userPosition">Height: <span style="margin-left: 5px; color: #FFFFFF;">5’6”</span></span>
                    <span class="userPosition">Age :<span style="margin-left: 5px; color: #FFFFFF;">25</span></span>
                </div>
            </div>
        `;
    return html;
  },
};
