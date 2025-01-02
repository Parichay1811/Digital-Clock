const time = document.getElementById('time')
const timeFormat = document.getElementById('time-format')

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateTime, 1000);
})
function updateTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // let date = today.getDate();

    if(h < 10){
        h = '0' + h;
    }
    if(m < 10){
        m = '0' + m;
    }
    if(s < 10){
        s = '0' + s;
    }
    time.textContent = `${h}:${m}:${s}`;
    timeFormat.innerHTML = (h < 12) ? 'AM' : 'PM';
}