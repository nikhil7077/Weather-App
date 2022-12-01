// https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=482ab80833128b8817b5eb487df1942a -  
console.log("Start");

const fetchData =async(city)=>{
  const response = await axios (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=482ab80833128b8817b5eb487df1942a`);

  console.log((response.data.main.temp-273.15).toFixed(2));
 document.getElementsByClassName('temperature')[0].innerText=(response.data.main.temp-273.15).toFixed(2);

 console.log('Middle');
 document.getElementsByClassName('city')[0].value=""
}
function search(){
    var city=document.getElementsByClassName('city')[0].value;
    fetchData(city)
}

console.log("End");

