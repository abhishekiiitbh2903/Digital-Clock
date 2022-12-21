const current=()=>{
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".seconds");
    hoursElement.innerText = new Date().getHours();
    minutesElement.innerText = new Date().getMinutes();
    secondsElement.innerText =new Date().getSeconds(); 
    let t=setTimeout(()=>{
        current()
    },1000);
}
current();