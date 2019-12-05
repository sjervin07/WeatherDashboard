var APIKey= "7d210ce3ec3c3a4699eca0939f42480f";
var queryURL="https://api.openweathermap.org/data/2.5/weather?" + "q=Grayslake,us&units=imperial&APPID=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {
    $(".city").html("<h1>" + response.name + "</h1>")
    $(".temp").text("Temperature (F): " + response.main.temp);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".wind").text("Wind Speed: " + response.wind.speed);

    var temF = (response.main.temp - 273.15) * 1.80 + 32;
    $("tempF").text("Temperature (Kelvin) " + tempF);




});