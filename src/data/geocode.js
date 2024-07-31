const request=require("request")
const geocode=(country,callback)=>{
    const geocodingUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+country+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request({url:geocodingUrl,json:true},(error,response)=>{
        if(error){
            callback("ERROR OCURED",undefined)
        }
        else if(response.body.message){
            callback(response.body.message,undefined)
        }
        else if(response.body.features.length==0){
            callback("ERROR IN COUNTRY YASTA",undefined)
        }
        else{
            
            callback(undefined,{
                longtitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1]
            })
        }
    })
}
module.exports=geocode