const box=document.getElementById('container-date');
const box2=document.getElementById('container-time');
function getTime(){
    let datatime=new Date();
    box.innerText=` ${datatime.toDateString()}`
    box2.innerText=`${datatime.toLocaleTimeString()}`;
    setTimeout(getTime,1000);
}
getTime();
