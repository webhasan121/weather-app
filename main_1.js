//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9308bd4d586fa330d2bec47124b8a759&units=metric

//Handle data

class Weather{
    constructor(city,country){
      this.city = city
      this.country = country
      this.APPId = '9308bd4d586fa330d2bec47124b8a759'
    }
    async getWeather(){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.APPId}&units=metric`).then(data => data.json())

      return {
        main_data : response.main,
        overall_data : response.weather[0],
        cityName : response.name
        
      }
    }
    changeLocation(city,country){
      this.city = city
      this.country = country
    }
}

//Handle Ui of Weather App
class Ui{
  constructor(){
    this.city = document.getElementById('w-city')
    this.icon = document.getElementById('w-icon')
    this.feels = document.getElementById('w-feels')
    this.temperature = document.getElementById('w-temp')
    this.pressure = document.getElementById('w-pressure')
    this.humidity = document.getElementById('w-humidity')
  }
  paint({main_data:{temp,humidity,pressure},overall_data:{main,icon},cityName}){
    
    this.city.textContent = cityName
    const iconUrl = Ui.generateIcon(icon)
    this.icon.setAttribute('src',iconUrl)
    this.feels.textContent =  main
    this.temperature.textContent = `Temperature(Cel): ${temp}`
    this.pressure.textContent = `Pressure(Hpa): ${pressure}`
    this.humidity.textContent =`Humidity(%): ${humidity}`
  }
  static generateIcon(icon){
   return "http://openweathermap.org/img/w/" + icon + ".png";
  }
  clearFiled(){
    document.getElementById('city').value = ''
    document.getElementById('country').value = ''
  }
  setMessage(message,className){
    // console.log(message,className);
    const div = document.createElement('div')
    const jumbotron = document.querySelector('.jumbotron')
    const form = document.querySelector('form')

    div.className = `alert alert-${className}`
    div.innerHTML = message

    jumbotron.insertBefore(div, form)
    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 2000)
  }
}

class Store{
  constructor(){
    this.city;
    this.country;
    this.defalutCity = "Kurigram";
    this.defalutCountry = "Bangladesh";
  }
  getLocation(){
    if(localStorage.getItem('city') === null){
      this.city = this.defalutCity
    }else{
      this.city = localStorage.getItem('city')
    }

    if(localStorage.getItem('country') === null){
      this.country = this.defalutCountry
    }else{
      this.country = localStorage.getItem('country')
    }

    return {
      city : this.city,
      country : this.country
    }
  }
  setLocation(city,country){
      localStorage.setItem('city',city)
      localStorage.setItem('country',country)
  }
}

const store = new Store()


const{city,country} = store.getLocation()






//Instantiate Weather class
const weather = new Weather(city,country)

document.addEventListener('DOMContentLoaded', weatherData)

//form 
document.getElementById('w-form').addEventListener('submit',function(e){
  e.preventDefault()
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  if( city === '' || country === '' ){
    ui.setMessage('Please provide with necessary information','danger')

  }else{
    weather.changeLocation(city,country)
    weatherData()
    ui.clearFiled()
    store.setLocation(city,country)
    ui.setMessage('OK','success')
  }
})

const ui = new Ui()

function weatherData(){
  weather.getWeather().then(data => {
    console.log(data);
    ui.paint(data)
  }).catch( data => ui.setMessage('5','danger'))
}

































// function People(){

// }

// const our = new People()


// function abc(){
//   const myOBj = {
//     name : "hasan",
//     age : 20,
//     weather : {
//       tem : 20,
//       temp_max : 50,
//       temp_min : 10
//     }
  
//   }
  
//   return {
//     what : myOBj.weather
//   }
  
// }




///////////////////////

///////////////////////






//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9308bd4d586fa330d2bec47124b8a759&units=metric

//Handle data

class Weather{
  constructor(city,country){
    this.city = city
    this.country = country
    this.APPId = '9308bd4d586fa330d2bec47124b8a759'
  }
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.APPId}&units=metric`).then(data => data.json())

    return {
      main_data : response.main,
      overall_data : response.weather[0],
      cityName : response.name
      
    }
  }
  changeLocation(city,country){
    this.city = city
    this.country = country
  }
}

//Handle Ui of Weather App
class Ui{
constructor(){
  this.city = document.getElementById('w-city')
  this.icon = document.getElementById('w-icon')
  this.feels = document.getElementById('w-feels')
  this.temperature = document.getElementById('w-temp')
  this.pressure = document.getElementById('w-pressure')
  this.humidity = document.getElementById('w-humidity')
}
paint({main_data:{temp,humidity,pressure},overall_data:{main,icon},cityName}){
  
  this.city.textContent = cityName
  const iconUrl = Ui.generateIcon(icon)
  this.icon.setAttribute('src',iconUrl)
  this.feels.textContent =  main
  this.temperature.textContent = `Temperature(Cel): ${temp}`
  this.pressure.textContent = `Pressure(Hpa): ${pressure}`
  this.humidity.textContent =`Humidity(%): ${humidity}`
}
static generateIcon(icon){
 return "http://openweathermap.org/img/w/" + icon + ".png";
}
clearFiled(){
  document.getElementById('city').value = ''
  document.getElementById('country').value = ''
}
setMessage(msg){
  const div = document.createElement('div')
  div.className = 'alert alert-danger'
  div.id = 'message'
  div.textContent = msg
  const para = document.querySelector('.jumbotron p')
  Ui.hideMessage()
  para.insertAdjacentElement('afterend', div)

}
static hideMessage(){
  setTimeout(function(){
    document.getElementById('message').remove()
  }, 2000)
}
}

class Store{
constructor(){
  this.city;
  this.country;
  this.defalutCity = "Kurigram";
  this.defalutCountry = "Bangladesh";
}
getLocation(){
  if(localStorage.getItem('city') === null){
    this.city = this.defalutCity
  }else{
    this.city = localStorage.getItem('city')
  }

  if(localStorage.getItem('country') === null){
    this.country = this.defalutCountry
  }else{
    this.country = localStorage.getItem('country')
  }

  return {
    city : this.city,
    country : this.country
  }
}
setLocation(city,country){
    localStorage.setItem('city',city)
    localStorage.setItem('country',country)
}
}

const store = new Store()


const{city,country} = store.getLocation()






//Instantiate Weather class
const weather = new Weather(city,country)

document.addEventListener('DOMContentLoaded', weatherData)

//form 
document.getElementById('w-form').addEventListener('submit',function(e){
e.preventDefault()
const city = document.getElementById('city').value
const country = document.getElementById('country').value

if( city === '' || country === '' ){

  ui.setMessage("Please provide with necessary information")

}else{
  weather.changeLocation(city,country)
  weatherData()
  ui.clearFiled()
  store.setLocation(city,country)
}
})

const ui = new Ui()

function weatherData(){
weather.getWeather().then(data => {
  ui.paint(data)
}).catch( data => ui.setMessage("Your city is not found"))
}

















