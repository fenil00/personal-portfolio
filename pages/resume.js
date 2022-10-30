var pillsall = document.getElementById("pills-all-tab");
var allsection = document.getElementById("all");

/*pillsall.addEventListener('load', function(){*/
$(function() {
    if(allsection.hasChildNodes() == false){
        for(var skill of _skills){
            if(skill.category.includes("all")){
                
                var div = document.createElement('div');
    
                div.className = 'skillbar';
                var cat = skillcolors.find(x => x.category == skill.category[0]);
                div.innerHTML = `
                <div class="skillbar-title" style="background:${cat.color};"><span>${skill.title}</span></div>
                <div class="skillbar-bar" style="width:${String(Math.min(100, Math.max((skill.competency / 5.0) * 100.0, 0)))}%;background:${cat.color};"></div>
                <div class="skill-bar-percent">${skill.competency + '/5'}</div>
                `;
                allsection.appendChild(div);
            }
        }
    }
});

var pgms = document.getElementById("pills-programming-tab");
var pgsection = document.getElementById("programming");

pgms.addEventListener('click', function(){
    if(pgsection.hasChildNodes() == false){
        for(var skill of _skills){
            if(skill.category.includes("programming")){
                
                var div = document.createElement('div');
    
                div.className = 'skillbar';
              
                var cat = skillcolors.find(x => x.category == "programming");

                div.innerHTML = `
                <div class="skillbar-title" style="background:${cat.color};"><span>${skill.title}</span></div>
                <div class="skillbar-bar" style="width:${String(Math.min(100, Math.max((skill.competency / 5.0) * 100.0, 0)))}%;background:${cat.color};"></div>
                <div class="skill-bar-percent">${skill.competency + '/5'}</div>
                `;
                pgsection.appendChild(div);
            }
        }
    }
});



var pillslanguage = document.getElementById("pills-languages-tab");
var languagesection = document.getElementById("languages");

pillslanguage.addEventListener('click', function(){
    if(languagesection.hasChildNodes() == false){
        for(var skill of _skills){
            if(skill.category.includes("languages")){
                
                var div = document.createElement('div');
    
                div.className = 'skillbar';
              
                var cat = skillcolors.find(x => x.category == "languages");

                div.innerHTML = `
                <div class="skillbar-title" style="background:${cat.color};"><span>${skill.title}</span></div>
                <div class="skillbar-bar" style="width:${String(Math.min(100, Math.max((skill.competency / 5.0) * 100.0, 0)))}%;background:${cat.color};"></div>
                <div class="skill-bar-percent">${skill.competency + '/5'}</div>
                `;
                languagesection.appendChild(div);
            }
        }
    }
});

var pillswebdevelopment = document.getElementById("pills-webdevelopment-tab");
var webdevelopmentsection = document.getElementById("webdevelopment");

pillswebdevelopment.addEventListener('click', function(){
    if(webdevelopmentsection.hasChildNodes() == false){
        for(var skill of _skills){
            if(skill.category.includes("webdevelopment")){
                
                var div = document.createElement('div');
    
                div.className = 'skillbar';
              
                var cat = skillcolors.find(x => x.category == "webdevelopment");

                div.innerHTML = `
                <div class="skillbar-title" style="background:${cat.color};"><span>${skill.title}</span></div>
                <div class="skillbar-bar" style="width:${String(Math.min(100, Math.max((skill.competency / 5.0) * 100.0, 0)))}%;background:${cat.color};"></div>
                <div class="skill-bar-percent">${skill.competency + '/5'}</div>
                `;
                webdevelopmentsection.appendChild(div);
            }
        }
    }
});

var pillstools = document.getElementById("pills-tools-tab");
var toolssection = document.getElementById("tools");

pillstools.addEventListener('click', function(){
    if(toolssection.hasChildNodes() == false){
        for(var skill of _skills){
            if(skill.category.includes("tools")){
                
                var div = document.createElement('div');
    
                div.className = 'skillbar';
              
                var cat = skillcolors.find(x => x.category == "tools");

                div.innerHTML = `
                <div class="skillbar-title" style="background:${cat.color};"><span>${skill.title}</span></div>
                <div class="skillbar-bar" style="width:${String(Math.min(100, Math.max((skill.competency / 5.0) * 100.0, 0)))}%;background:${cat.color};"></div>
                <div class="skill-bar-percent">${skill.competency + '/5'}</div>
                `;
                toolssection.appendChild(div);
            }
        }
    }
});

var pillsdatabases = document.getElementById("pills-databases-tab");
var databasessection = document.getElementById("databases");

pillsdatabases.addEventListener('click', function(){
    if(databasessection.hasChildNodes() == false){
        for(var skill of _skills){
            if(skill.category.includes("databases")){
                
                var div = document.createElement('div');
    
                div.className = 'skillbar';
              
                var cat = skillcolors.find(x => x.category == "databases");

                div.innerHTML = `
                <div class="skillbar-title" style="background:${cat.color};"><span>${skill.title}</span></div>
                <div class="skillbar-bar" style="width:${String(Math.min(100, Math.max((skill.competency / 5.0) * 100.0, 0)))}%;background:${cat.color};"></div>
                <div class="skill-bar-percent">${skill.competency + '/5'}</div>
                `;
                databasessection.appendChild(div);
            }
        }
    }
});
