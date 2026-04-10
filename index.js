const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const meter2Feet = document.getElementById('meter-feet')
const liter2Gallon = document.getElementById('liter-gallon')
const kilo2Pound = document.getElementById('kilo-pound')
let convertedFeet = 0
let convertedMeters = 0
let convertedLiters = 0
let convertedGallons = 0
let convertedKilograms = 0
let convertedPounds = 0

let saved = JSON.parse(localStorage.getItem("theme"))
const toggle = document.getElementById('toggle')
if(saved !== null){
	toggle.checked = saved
	if(saved){
		document.body.classList.add("dark")
	}else{
		document.body.classList.remove("dark")
	}
}

convertBtn.addEventListener("click", function(){
		convertedFeet = inputEl.value * 3.281
		convertedMeters = inputEl.value / 3.281
		convertedGallons = inputEl.value * 0.264
		convertedLiters = inputEl.value / 0.264
		convertedPounds = inputEl.value * 2.204
		convertedKilograms = inputEl.value / 2.204
		meter2Feet.textContent = `${inputEl.value} meters = ${convertedFeet.toFixed(3)} feet | ${inputEl.value} feet = ${convertedMeters.toFixed(3)} meters`
		liter2Gallon.textContent = `${inputEl.value} liters = ${convertedGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${convertedLiters.toFixed(3)} liters`
		kilo2Pound.textContent = `${inputEl.value} kilos = ${convertedPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${convertedKilograms.toFixed(3)} kilos`
})

inputEl.addEventListener("input", function(){
	this.value = this.value.replace(/[^0-9]/g, '')
})

toggle.addEventListener("change", function(){
	localStorage.setItem("theme", JSON.stringify(this.checked))
	if(this.checked){
		document.body.classList.add("dark")
	}else{
		document.body.classList.remove("dark")
	}
})

