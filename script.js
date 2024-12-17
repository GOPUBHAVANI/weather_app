// Accessing all elements to apply all functinalities
 let locValue=document.querySelector(".location-value")
 let searcBtn=document.querySelector(".search-btn")
 let City=document.querySelector(".cityname")
 let Icon=document.querySelector(".weather-icon")
 let Temp=document.querySelector(".temp")
 let FeelLike=document.querySelector(".feel_like")
 let Wind=document.querySelector(".windspeed")
 let apiKey=`5764285d985c1ce1aa60d89563831a9a`
 // adding the functionalities
 searcBtn.addEventListener("click",()=>{
    let loc=locValue.value 
    if(loc===""){
        alert("please enter location")
    }else{
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            const {name,sys:{country}}=data
            const {description,icon}=data.weather[0]
            const {feels_like,temp}=data.main
            const {speed}=data.wind 
            City.innerText=`${name} , ${country}`
            City.innerHTML = `${name}, <span style="color: green;">${country}</span>`
            Icon.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
            FeelLike.innerHTML=`<span>Feels like : ${feels_like}&deg;C</span>`
            Temp.innerHTML=`<span>Temp : ${(temp-273).toFixed(2)}</span>`
            Wind.innerHTML=`<span>wind : ${speed}km/h</span>`
        })
    }
 })
