var APIKey= "7d210ce3ec3c3a4699eca0939f42480f";
var queryURL="https://api.openweathermap.org/data/2.5/weather?" + "q=Grayslake,us&units=imperial&APPID=" + APIKey;
var search= 


$.ajax({
    url: queryURL,
    method: "GET"
})



//Displaying current data except for UV

.then(function(response) {
    iconcode= response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(response)
    $(".city").html("<h1>" + response.name + "</h1>")
    $(".icon").html(`<img src=${iconurl}>`);
    $(".temp").text("Temperature (F): " + response.main.temp);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".wind").text("Wind Speed: " + response.wind.speed);

    var temF = (response.main.temp - 273.15) * 1.80 + 32;
    $("tempF").text("Temperature (Kelvin) " + tempF);


//Displaying UV index..not working yet
var lat = response.coord.lat;
var lon = response.coord.lon;

var uvQuery = "http://api.openweathermap.org/data/2.5/uvi?appid=$(APIKey)&lat={lat}&lon={lon}"

$.ajax({
    url: uvQuery,
    method: "GET"
})

.then(function(uvResponse) {

    $(".uv").html("UV Index: " + uvResponse[0].value);

    console.log(uvResponse);
  });

});