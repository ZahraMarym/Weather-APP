//API key and URL from open weather map
const APIKey="75fc4ad0caf48f333bb658c42b297234";
const APIUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const icon=document.querySelector(".weather-icon")
async function checkWhether(city){
    const response=await fetch(APIUrl+city+`&appid=${APIKey}`);
    var data=await response.json();
    //updating innerHTMLs
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    //Updating image for different weathers
    if(data.weather[0].main=="Clear"){
        icon.src="clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        icon.src="clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="mist.png";
    }
    else if(data.weather[0].main=="Haze"){
        icon.src="haze.png";
    }
    else if(data.weather[0].main=="Smoke"){
        icon.src="smoke.png";
    }
    document.querySelector(".weather").style.display="block";
}
//Calling function
searchBtn.addEventListener("click",()=>{
    checkWhether(searchBox.value);
})

