setInterval(setClock,1000);

const hourHand = document.querySelector('[hour-hand]');
const minuteHand = document.querySelector('[minute-hand]');
const secondHand = document.querySelector('[second-hand]');
console.log(secondHand);
console.log(minuteHand);
console.log(hourHand);

function setClock(){
    const currDate = new Date();
    const secondsRatio = currDate.getSeconds()/60;
    const minutesRatio = (currDate.getMinutes()+secondsRatio)/60;
    const hoursRatio = (currDate.getHours()+minutesRatio)/12;
    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hoursRatio);
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}

setClock();

