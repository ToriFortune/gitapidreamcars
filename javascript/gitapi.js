// $("button").on("click", function () {
//   var car = $(this).attr("data-cartype");
//   var queryUrl = "https://api.giphy.com/v1/gifs/search? /v1/gifs/search/?q=" + car + "&api_key=NI69UQ9EUpFtFNnCcZcCPQrHAuL2BLwy";



//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     .then(function (carResponse) {
//       console.log(queryUrl);
//       // console.log (response);
//       var results = carResponse.data;
//       for (var i = 0; i < results.length; i++) {
//         var carDiv = $("btn");

//         var x = $("<p>").text("q: " + results[i].q);
//         var y = $("<p>").text("limit: " + results[i].limit);
//         var z = $("<p>").text("rating: " + results[i].rating);
//         var carImage = $("<img>").attr('src', results[i].images.fixed_height.url);

//         carDiv.append(p);
//         carDive.append(carImage);
//         $("#gifs-appear-here").prepend(carDiv);
//       }




//     });

// });






var cars = ["Bentley", "Mercedes", "Porsche", "Ferrari"];

function displayCarName() {
  var car = $(this).attr("data-name");
  var queryUrl = "https://api.giphy.com/v1/gifs/search? /v1/gifs/search/?q=" + car + "&api_key=NI69UQ9EUpFtFNnCcZcCPQrHAuL2BLwy";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
}





function alertCarName() {
  var carName = $(this).attr("data-name");

  alert(carName);
}

$(document).on('click', '.car', displayCarName);
function renderButtons() {
  // to remove btns before adding a new btn for new value of car inputed

  $("#btns").empty();

  // loop 
  for (var i = 0; i < cars.length; i++) {


    var a = $("<button>");

    a.addClass("car");



    a.attr("data-name", cars[i]);
    a.text(cars[i]);
    // appending button to the html file
    $("#btns").append(a);
  }
}

// when button is clicked, execute function
$("#add-car").on("click", function (event) {


  //preventing browser default behavior which refreshes itself.
  event.preventDefault();
  // input for values entered in the textbox
  var car = $("#car-input").val().trim();


  cars.push(car);

  // Calling renderButtons to show car array
  renderButtons();

});

//Call renderbuttons to show buttons on initial load
renderButtons();