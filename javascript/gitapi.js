




var cars = ["Bentley", "Mercedes", "Porsche", "Ferrari"];

      
      function alertCarName() {
        var carName = $(this).attr("data-name");

        alert(carName);
      }

      
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
      $("#add-car").on("click", function(event) {


        //preventing browser default behavior
        event.preventDefault();
        // input for values entered in the textbox
        var car = $("#car-input").val().trim();

       
        cars.push(car);

        // Calling renderButtons to show car array
        renderButtons();

      });

      //Call renderbuttons to show buttons on initial load
      renderButtons();