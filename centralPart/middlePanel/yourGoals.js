export const yourGoals = {
    type:"clean",
    css:"yourGoals",
    rows:[
        { css:"yourGoals  listText",
            view: "template",
            template: "Your Goals",
            height:40,
          },
          {
            css:"yourGoals",
            view:"list",
          scroll:false,
           // template:'<img style="height:20px;" src=#src#></img> <span> #title#, #indicator#</span>',
            template:function(obj){
              const html = `
              <div class="yourG">
              
              <img style="height:20px;" src=${obj.src}></img> <span> ${obj.title}</span>
             
              <div>
                  <div class="completeWrapp">
                      <span class="completeBar" style="width:${obj.complete}%"></span>
                  </div>
                  <div class="completeVal">${obj.complete}%</div>
                  </div>
                  </div>
              `;
              return html;
          
},
            data:[
                { id:1, src:"./icons/smallSmile/smallSmile.png", title:"Weight lose", indicator:"8.3 hr", complete: 81},
                { id:2, src:"./icons/smallSmile/smallFood.png", title:"Meal plan", indicator:"8.3 hr", complete: 81},
                { id:3, src:"./icons/smallSmile/smallSteps.png", title:"Steps", indicator:"8.3 hr", complete: 81},
                { id:4, src:"./icons/smallSmile/smallYoga.png", title:"Yoga", indicator:"8.3 hr", complete: 81},
                { id:5, src:"./icons/smallSmile/smallApple.png", title:"Fruit", indicator:"8.3 hr", complete: 81},
                { id:6, src:"./icons/smallSmile/smallDrop.png", title:"Water", indicator:"8.3 hr", complete: 81},
                { id:7, src:"./icons/smallSmile/smallSleep.png", title:"Sleep", indicator:"8.3 hr", complete: 81},
            ],
          }
    ]

}