const geocode=require("./utils/geocode")
const forecast=require("./utils/forecast")




geocode("Mirpur Bangladesh",(error,data)=>
{	
	if (error)
	{
		return console.log(error)
	}

	forecast(data.latitude,data.longitude,(error,forecastData)=>
	{
		if (error)
		{
			return console.log(error)
		}
	

		console.log("Data:",forecastData)
		console.log("location:",data.place_name)
	})
})


// forecast(23.784506,90.403409,(error,data)=>
// {
// 	console.log("Error:",error)
// 	console.log("Data :",data)
// })