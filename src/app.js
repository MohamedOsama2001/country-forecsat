// Express=>frame work for node js=>for build web App
const express=require("express");
const app=express()
const port=process.env.PORT || 3000
/*app.get("/",(req,res)=>{
    res.send("home page")
})*/
/*app.get("/contact",(req,res)=>{
    res.send("contact with us")
})
app.get("/products",(req,res)=>{
    res.send("products page")
})
app.get("/categories",(req,res)=>{
    res.send("hello categories home page")
})*/
//nodemon automatic run
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
app.get("/customer1",(req,res)=>{
    res.render("customer1",{
        img:"images/customer.jpg",
        title:"customer1",
        name:"mohamed osama",
        age:"23",
        city:"Banha",
        nationality:"Egyptian",
        phoneNumber:"011256447666"
    })
})
app.get("/customer2",(req,res)=>{
    res.render("customer2",{
        img:"images/customer.jpg",
        title:"customer2",
        name:"mohamed adel",
        age:"22",
        city:"Mansoura",
        nationality:"Egyptian",
        phoneNumber:"010125458566"
    })
})
app.get("/customer3",(req,res)=>{
    res.render("customer3",{
        img:"images/customer.jpg",
        title:"customer3",
        name:"hesham mosaad",
        age:"25",
        city:"Cairo",
        nationality:"Egyptian",
        phoneNumber:"01234568855"
    })
})
app.get("/customer4",(req,res)=>{
    res.render("customer4",{
        img:"images/customer.jpg",
        title:"customer4",
        name:"elemby",
        age:"26",
        city:"Badr",
        nationality:"Egyptian",
        phoneNumber:"012345689896"
    })
})



app.listen(port,()=>{
    console.log("run on port 3000")
})
