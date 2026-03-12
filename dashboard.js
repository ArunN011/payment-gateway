function nextStep(step){

document.getElementById("step1").classList.add("hidden")
document.getElementById("step2").classList.add("hidden")
document.getElementById("step3").classList.add("hidden")

document.getElementById("step"+step).classList.remove("hidden")

document.querySelectorAll(".step").forEach(s=>s.classList.remove("active"))

document.getElementById("s"+step).classList.add("active")

}

function addPin(num){

let pin=document.getElementById("pin")

if(pin.value.length<4){

pin.value+=num

}

}

function processPayment(){

let pin=document.getElementById("pin")

if(pin.value.length==4){

document.getElementById("step3").classList.add("hidden")

document.getElementById("loader").classList.remove("hidden")

setTimeout(()=>{

document.getElementById("loader").classList.add("hidden")

document.getElementById("success").classList.remove("hidden")

},2000)

}

}
