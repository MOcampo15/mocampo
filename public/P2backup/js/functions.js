//JavaScript file
$(document).ready(function() {
              //event listeners  
                /*global $*/
                $("button").on("click", gradeQuiz); 
                
                function isFormValid() { 
                    let isValid = true;
                    if ($("#q1").val() == "") {
                        isValid = false;
                        $("#validationFdbk").html("Question 1 was not answered");
                    }
                    return isValid;
                }
                /*global score*/
                function rightAnswer(index) {
                    $(`#q${index}Feedback`).html("Correct!");
                    $(`#q${index}Feedback`).attr("class", "bg-success text-white");
                    $(`#markImg${index}`).html("<img src = 'img/checkmark.png'>");
                    score += 20;
                }
                
                function wrongAnswer(index) {
                    $(`#q${index}Feedback`).html("Incorrect!");
                    $(`#q${index}Feedback`).attr("class", 'bg-warning text-white');
                    $(`#markImg${index}`).html("<img src = 'img/xmark.png' alt = 'xmark'>");
                }
                
                function smallAnswer(index) {
                    $(`#q${index}Feedback`).html("Correct!");
                    $(`#q${index}Feedback`).attr("class", "bg-success text-white");
                    $(`#markImg${index}`).html("<img src = 'img/checkmark.png'>");
                    score += 12.5;
                }
                
                
                function gradeQuiz() {
                    
                    $("#validationFdbk").html(""); //resets validation feedback
                    
                    
                if (!isFormValid()) {
                    return
                }
                
                if ()