//JavaScript 


            //Displaying City from API after Zip Code is typed in 
            // Displaying City from API after typing a zip code
            $("#weather").on("change", function() {
                $.ajax({
                      method: "GET", 
                         url: "http://api.openweathermap.org/data/2.5/weather?q=Hollister,us&APPID=fb8e12000f5651c6d9423b4e36a6fb5e", 
                    dataType: "json", 
                        data: { "weather": $("#weather").val() }, 
                     success: function(result,status) {
                          
                        $("#weather").html(result.city); 
                        $("#lat").html(result.latitude); 
                        $("#lon").html(result.longitude); 
                    }
                }); // ajax
            }); // zip 