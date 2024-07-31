let form1=document.querySelector("#form1")
form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    weatherFunction()
    form1.reset()
})
const locationP=document.getElementById("location")
const longtitudeP=document.getElementById("longtitude")
const latitudeP=document.getElementById("latitude")
const forcastP=document.getElementById("forcast")
const errorP=document.getElementById("error")
let weatherFunction=async()=>{
    try{
        const inp1=document.getElementById("inp1").value;
        const res=await fetch('http://localhost:3000/weather?address='+inp1)
        const data=await res.json()
        if(data.error){
            errorP.innerText=data.error
            locationP.innerText=""
            longtitudeP.innerText=""
            latitudeP.innerText=""
            forcastP.innerText=""
        }
        else{
            locationP.innerText=data.country
            setTimeout(()=>{
                return longtitudeP.innerText=data.longtitude
            },1000)
            setTimeout(()=>{
                return latitudeP.innerText=data.latitude
            },2000)
            setTimeout(()=>{
                return forcastP.innerText=data.forcast
            },3000)
            errorP.innerText=""
        }
    }
    catch(e){
        console.log(e)
    }
}