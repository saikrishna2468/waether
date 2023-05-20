let InputE1=document.getElementById("in");
let t_value=document.getElementById("tem_value");
let l=document.getElementById("demo");
let d=document.getElementById("des");
let b=document.getElementById("btn");
let i=document.getElementById("icon");
const apiKey='a1233d02afd80520f2e767edd744f976'
b.onclick=function(){
    if(InputE1.value==""){
        alert("Please enter the location");
    }else{
        loc=InputE1.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res=>res.json())
        .then(dat => {
            console.log(dat);
            const{name}=dat
            const{feels_like}=dat.main
            const{description}=dat.weather[0]
            t_value.innerText=Math.floor(feels_like-273);
            l.innerText=name;
            d.innerText=description
        })
        .catch(()=>{
            
        })
        InputE1.value=""
    }
}

function sai(){
    var date=new Date()
var hour=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var day=date.getDay();
document.getElementById("h").innerHTML=hour-12;
document.getElementById("m").innerHTML=min;
document.getElementById("s").innerHTML=sec;
}
setInterval(sai,1000);
