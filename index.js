let toggle = document.getElementById('toggle')
let saved = JSON.parse(localStorage.getItem("theme"))

if(saved !== null){
	toggle.checked = saved;
	if(saved){
		document.body.classList.add("light")
	}else{
		document.body.classList.remove("light")
	}
}

toggle.addEventListener("change", function(){
	localStorage.setItem("theme", JSON.stringify(this.checked))
	if(this.checked){
		document.body.classList.add("light")
	}else{
		document.body.classList.remove("light")
	}
})