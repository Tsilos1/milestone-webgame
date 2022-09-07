//submit button function
submit.addEventListener('click', getResults);




//each question must be answered alert and stop from calculating quiz





//tally totals of each value
function displayRadioValue(){
    var score = 0;
    var ele = document.getElementsByName('earth', 'air', 'water', 'fire', 'mixed');
    for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result").innerHTML
                       score+=parseInt(ele[i].value)
    }
    }

// $("input[type=radio]").click(function() {
//     var total = 0;
//     $("input[type=radio]:checked").each(function() {
//         total += parseFloat($(this).val());
//     });
 
//     $(".totalSum").val(total);
// });




//compare totals of each value





//Display results page
//hide results that do not apply