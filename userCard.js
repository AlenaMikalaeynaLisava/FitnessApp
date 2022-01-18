export const userCard = {
  view: 'template',
  	css: "sidebarUser",
  height: 204,
  template() {
     let html = `
            <div class="userWrapp">
                <div class="userImg">
                    <img src="./icons/avatar.png">
                    <span class="userStatus"></span>
                </div>
                <div class="userInfo">
                    <span class="userName">Alisa Epson</span>
                    <span class="userPosition">Weight</span>
                    <span class="userPosition">Height</span>
                    <span class="userPosition">Age</span>
                </div>
            </div>
        `;
    return html;
  },
};
