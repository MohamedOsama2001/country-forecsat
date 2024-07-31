const request=require("request")
const forecast=(longtitude,latitude,callback)=>{
    const url="https://api.weatherapi.com/v1/current.json?key=0458a50cbd9742d295281749241707&q="+latitude+","+longtitude
    request({url,json:true},(error,response)=>{
        //const dataObj=JSON.parse(response.body)
        if(error){
            callback("Error Equired",undefined)
        }
        else if(response.body.error){
            callback(response.body.error.message,undefined)
        }
        else{
            callback(undefined,response.body.current.condition.text+" and temprature is "+response.body.current.temp_c)
        }
    })
}
module.exports=forecast