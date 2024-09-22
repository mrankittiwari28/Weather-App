const apiKey="f0488cb09ad2a3506275cc1a66375b63";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

async function checkWeather(city){

    const response=await fetch(apiUrl+city+`&appid=${apiKey}`); 

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"\xB0C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    document.querySelector(".weather").style.display="block"
}
;}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})


