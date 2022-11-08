/* const me = document.querySelector(".navbar-brand");
const abt = document.querySelector(".abt");
const about = document.querySelector("#about");
const rsm = document.querySelector(".rsm");
const resume = document.querySelector("#resume");
const pjs = document.querySelector(".pjs");
const projects = document.querySelector("#projects");
const cnt = document.querySelector(".cnt");
const contact = document.querySelector("#contact");
const sts = document.querySelector(".sts");
const stats = document.querySelector("#stats");
const fenildesai = document.querySelector("#fenildesai");

$(function() {
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "none";

    var lastTab = localStorage.getItem('lastTab');
    if(lastTab == null){
        lastTab = "#fenildesai";
    }
    const y = document.querySelector(lastTab);
    y.style.display  = "flex";
    let filename = lastTab.toString().slice(1);
    let page = "pages/" + filename+ ".html";
    $(y).load(page);
});


me.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "flex";
    $('#fenildesai').load("pages/fenildesai.html");
    localStorage.setItem('lastTab', $(me).attr('href'));


});

abt.addEventListener('click', function(){
     about.style.display = "flex";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "none";  
    $('#about').load("pages/about.html");
    localStorage.setItem('lastTab', $(abt).attr('href')); 

});

rsm.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "flex";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "none";
    $('#resume').load("pages/resume.html");
    localStorage.setItem('lastTab', $(rsm).attr('href'));

});

pjs.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "flex";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "none";
    $('#projects').load("pages/projects.html");
    localStorage.setItem('lastTab', $(pjs).attr('href'));
});

sts.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "flex";
    fenildesai.style.display = "none";
    $('#stats').load("pages/stats.html");
    localStorage.setItem('lastTab', $(sts).attr('href'));
});

cnt.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "flex";
    stats.style.display = "none";
    fenildesai.style.display = "none";
    $('#contact').load("pages/contact.html");
    localStorage.setItem('lastTab', $(cnt).attr('href'));
}); */