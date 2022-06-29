
const clockConteiner = document.querySelector ('.clock');
function undateClock() {
    clockConteiner.innerText = new Date().toLocaleTimeString();
}
setInterval(undateClock, 1000);
