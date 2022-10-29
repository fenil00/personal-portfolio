let bars = document.querySelectorAll(".skillbar-bar");
for(let bar of bars){
    bar.style.width = `${String(Math.min(100, Math.max((bar.getAttribute("data-width") / 5.0) * 100.0, 0)))}%`;
}