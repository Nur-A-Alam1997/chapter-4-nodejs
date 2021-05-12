const request =require("request")

const url="http://api.weatherstack.com/current?access_key=030f15c5bb5b906edfd58ec7b1d5e080&query=23.784506,90.403409&units=f"
// request({ url:url }, (error,response)=>{

// 	// console.log(response)
// 	const data= JSON.parse(response.body)
// 	console.log(data.currently)
// })

request({ url:url, json:true }, (error,response)=>{

	if (error)
	{
		console.log("Unable to connect")
		return
	}
	if(response.body.error)
	{
		console.log( "Location not found")
		return
	}


	console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
})

const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/Dhaka.json?limit=2&access_token=pk.eyJ1IjoiYXJwb2hyaWR4IiwiYSI6ImNrb2drNDRqYzB4MW0ydXIweWhpY2ZiOGgifQ.3_BQsj7LjRiYCFq51CTotQ"
request({ url:geoUrl, json:true }, (error,response)=>
{	
	if (error)
	{
		console.log("Unable to find data")
		return
	}

	if (response.body.features.length===0)
	{
		console.log("Not available")
		return
	}
	const Longitude= response.body.features[0].center[0]
	const Lattitude= response.body.features[0].center[1]
	console.log("Longitude "+response.body.features[0].center[0])
	console.log("Lattitude "+response.body.features[0].center[1])
})




const geocode =(address,callback)=>
{
	const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?limit=2&access_token=pk.eyJ1IjoiYXJwb2hyaWR4IiwiYSI6ImNrb2drNDRqYzB4MW0ydXIweWhpY2ZiOGgifQ.3_BQsj7LjRiYCFq51CTotQ"
	request({ url:geoUrl, json:true }, (error,response)=>
	{

		if (error)
		{
			callback("Unable to find service",undefined)
			
		}
		if (response.body.features.length===0)
		{
			callback("Unable to find location",undefined)
			
		}
		callback(undefined,
		{

		 "Longitude" :response.body.features[0].center[0],
		 "Lattitude" :response.body.features[0].center[1],
		 "place_name" :response.body.features[0].place_name	
		}
		 )
	})
}

const forecast=(latitude,longitude,callback)=>
{
	const url="http://api.weatherstack.com/current?access_key=030f15c5bb5b906edfd58ec7b1d5e080&query="+latitude+","+longitude+"&units=m"

	request({url:url,json:true},(error,response)=>
	{
		if (error)
		{
			callback("Unable to connect",undefined)
			return 
		}
		if (response.body.error)
		{
			callback("Location not found",undefined)
			return 
		}

		return callback(undefined,response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out there.")
	})

}


geocode("Chandpur",(error,data)=>
{
	console.log("Error",error)
	console.log("Data",data)

	forecast(data.Latitude,data.Longitude,(error,forecastData)=>
	{
		console.log("Error",error)
		console.log("Place-name",data.place_name)
	})
})





