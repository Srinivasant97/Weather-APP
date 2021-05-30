
require('dotenv').config()


Weather_API_KEY=process.env.open_weathermap_API_KEY

const express=require('express')

const axios=require('axios')
const app = express()

const ap="`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}`"

app.use(express.json())
app.use(express.static('public'))


app.post('/weather',(req,res)=>{
	const url= `https://api.openweathermap.org/data/2.5/weather?q=${req.body.place}&appid=${Weather_API_KEY}`
	axios({
		url:url,
		responseType:'json'
	}).then(data => res.json(data.data))

	
})


app.listen(3000,()=> console.log("Server Started"))