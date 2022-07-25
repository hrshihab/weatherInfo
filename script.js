// var button = document.getElementById('Btn');
// var inputValue = document.querySelector('.inputValue');
// var names = document.querySelector('.names');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');

// button.addEventListener('click',function(){
//   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3d68f47634f19045162c23e2ead7c6c1')
//   .then(res =>res.json())
//   .then(data => {
//     var nameValue = data['name'];
//     var tempValue = data ['main'] ['temp'];
//     var descValue = data ['weather'] [0] ['description'];

//     names.innerHTML = nameValue;
//     temp.innerHTML = tempValue;
//     desc.innerHTML = descValue;
//   })
// })

//



const API_KEY = `3d68f47634f19045162c23e2ead7c6c1`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        .catch((err) => {
         alert('Not Available this location');
        });
        
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}





