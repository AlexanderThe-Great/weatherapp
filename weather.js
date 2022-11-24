var inputval = document.querySelector('#cityinput');
var button = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var descrip = document.querySelector('#description');
apikey = "fb4badbc8a6995c96fa946131e3bd89e";
function convertion(val)
{
    return (val - 272).toFixed(2);
}
button.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apikey)
  .then(res => res.json())
  .then(data => 
  {
    var nameval = data['name'];
    var temperature = data['main']['temp'];
    var descrip = data['weather']['0']['description'];
    var windspeed = data['wind']['speed'];
    city.innerHTML=`Weather in: <span>${nameval}<span>`;
    temp.innerHTML = `Temperature: <span>${ convertion(temperature)} C</span>`;
    wind.innerHTML = `Wind speed: <span>${windspeed} km/h<span>`;
    description.innerHTML = `Weather condition: <span>${descrip}<span>`;
  })
  .catch(err => alert('Incorrect city input'));
});