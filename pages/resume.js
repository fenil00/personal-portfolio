var pgms = document.getElementById("pills-programming-tab");
var pgsection = document.getElementById("programming");

pgms.addEventListener('click', function(){
    console.log(_skills);
    if(pgsection.hasChildNodes() == false){
        for(var skill of _skills){
            if(skill.category.includes("programming")){
    
                var div = document.createElement('div');
    
                div.className = 'skillbar';
              
                div.innerHTML = `
                <div class="skillbar-title"><span>${skill.title}</span></div>
                <div class="skillbar-bar" style="width:${String(Math.min(100, Math.max((skill.competency / 5.0) * 100.0, 0)))}%;"></div>
                <div class="skill-bar-percent">${skill.competency + '/5'}</div>
                `;
                pgsection.appendChild(div);
            }
        }
    }
});

