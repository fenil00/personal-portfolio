const me = document.querySelector(".navbar-brand");
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

// about.style.display = "none";
// resume.style.display = "none";
// projects.style.display = "none";
// contact.style.display = "none";
// stats.style.display = "none";
// fenildesai.style.display = "flex";

me.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "flex";
});

abt.addEventListener('click', function(){
    about.style.display = "flex";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "none";
        //jquery code goes here....        
        let x = $('#about').load("pages/me.html");
        console.log(x);
});

rsm.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "flex";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "none";
});

pjs.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "flex";
    contact.style.display = "none";
    stats.style.display = "none";
    fenildesai.style.display = "none";
});

sts.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    stats.style.display = "flex";
    fenildesai.style.display = "none";
});

cnt.addEventListener('click', function(){
    about.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "flex";
    stats.style.display = "none";
    fenildesai.style.display = "none";
});