export const userCard = {
  view: 'template',
  	css: "sidebarUser",
      gravity: 25,
  height: 204,
  scroll:true,
  template(obj) {
     let html = `
            <div class="userWrapp">
                <div class="userImg">
                    <img src="./icons/avatar.png">
                    <span class="userStatus"></span>
                </div>
                <div class="userInfo">
                    <span class="userName">Alisa Epson</span>
                    <span class="userPosition">Weight: <span class="userResult">59 kg</span></span>
                    <span class="userPosition">Height: <span class="userResult">5’6”</span></span>
                    <span class="userPosition">Age :<span class="userResult">25</span></span>
                </div>
            </div>
        `;
    return html;
  },
};
