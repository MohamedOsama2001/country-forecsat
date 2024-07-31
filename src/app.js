const express=require("express");
const app=express()
const port=process.env.PORT || 3000
//////////////////////////////////////////////////////////////////////////
// static path
const path=require("path")
const x=path.join(__dirname,"../public")
app.use(express.static(x))
//////////////////////////////////////////////////////////////////////////
//hbs
app.set('view engine', 'hbs');
const viewsDirectory=path.join(__dirname,"../temp1/views")
app.set("views",viewsDirectory)

const hbs=require("hbs")
const partialsDirectory=path.join(__dirname,"../temp1/partials")
hbs.registerPartials(partialsDirectory)
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home Page",
        descrp:"Welcome to Home Page"
    })
})
/*///////////////////          request        ///////////////////////*/
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"you must add address"
        })
    }
    const geocode=require("./data/geocode")
    const forcast=require("./data/forecast")
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forcast(data.longtitude,data.latitude,(error,forcastdata)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forcast:"Forecast is: "+forcastdata,
                longtitude:"Longtitude is: "+data.longtitude,
                latitude:"Latitude is: "+data.latitude,
                country:"Country is: "+req.query.address
            })

        })
    })

    /*res.send({
        address:req.query.address,
        forcast:"cold"
    })*/
})
///////////////////////////////////////////////////////////////////////
/*app.get("*",(req,res)=>{
    res.send("page not found")
})*/



app.listen(port,()=>{
    console.log("run on port 3000")
})
