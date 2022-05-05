export const yourGoals = {
    type:"clean",
    //css:"yourGoals",
    rows:[
        { css:"yourGoals listText" , //listText
            view: "template",
            template: "Your Goals",
            height:40,
          },
          {
            css:"yourGoals",
            view:"list",
            
          scroll:"y",
           // template:'<img style="height:20px;" src=#src#></img> <span> #title#, #indicator#</span>',
            template:function(obj){
              const html = `
              <div class="yourG">
              
              <img style="height:20px;" src=${obj.src}></img> <span style="color: rgba(255, 255, 255, 0.7);"> ${obj.title}</span>
             
              <div>
                  <div class="completeWrapp completeWrapp">
                      <span class="completeBar" style="width:${obj.complete}%"></span>
                  </div>
                  <div class="completeVal"><span style="color: rgba(255, 255, 255, 0.7);">${obj.indicator1}</span><span>${obj.indicator}</span></div>
                  </div>
                  </div>
              `;
              return html;
          
},
            data:[
                { id:1, src:"./icons/smallSmile/smallSmile.png", title:"Weight lose", indicator1:"5/", indicator:"10 kg", complete: 81},
                { id:2, src:"./icons/smallSmile/smallFood.png", title:"Meal plan", indicator1:"1200/", indicator:"1500 kkal", complete: 81},
                { id:3, src:"./icons/smallSmile/smallSteps.png", title:"Steps", indicator1:"10000/", indicator:"10000 steps", complete: 81},
                { id:4, src:"./icons/smallSmile/smallYoga.png", title:"Yoga", indicator1:"35/", indicator:"40 min", complete: 81},
                { id:5, src:"./icons/smallSmile/smallApple.png", title:"Fruit", indicator1:"1/", indicator:"2", complete: 81},
                { id:6, src:"./icons/smallSmile/smallDrop.png", title:"Water", indicator1:"6/", indicator:"6 cups", complete: 81},
                { id:7, src:"./icons/smallSmile/smallSleep.png", title:"Sleep", indicator1:"8/", indicator:"8 hours", complete: 81},
            ],
          }
    ]

}