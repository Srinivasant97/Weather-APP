const searchElement = document.querySelector('[data-city]')

const searchButton = document.querySelector('[data-button]')
searchButton.addEventListener('click',()=>{
	const city=searchElement.value
	if (city==null) return 
	fetch('/weather',{
		method:'POST',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json'
		},
		body: JSON.stringify({
			place:city.toLowerCase()
		})
	}).then(res=>res.json()).then(data=>{
		show(data)
	})
	
})


const status= document.querySelector('[data-status]')
const command= document.querySelector('[data-command]')
const wind = document.querySelector('[data-wind]')
const temp = document.querySelector('[data-temp]')
const weather= document.querySelector('[data-weather]')

function show(data){
	status.innerHTML = data.name
	command.innerHTML= data.sys.country
	wind.innerHTML=data.wind.speed
	temp.innerHTML=data.main.temp
	weather.innerHTML=data.main.humidity
}


