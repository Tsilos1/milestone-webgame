//create array of questions



//create array of answers



//each question find winning value


//sum winning values (if/else if)
//if quest1 = earth += +1 earth (else if for air, water, fire, mixed)
//if quest2 (same as above)
//if quest3 (same as above)
//if quest4 (same as above)
//if quest5 (same as above)

function displayValues() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
      
    for(i = 0; i < ele.length; i++) {
          
        if(ele[i].type="radio") {
          
            if(ele[i].checked)
                document.getElementById("result").innerHTML
                        += ele[i].name + " Value: "
                        + ele[i].value + "<br>";
        }
    }



//add totals of sum winning values




//if 2 earth, then earth wins
//else if 2 air, then air wins
//else if 2 water, then water wins
//else if if 2 fire, then fire wins
//else mixed wins


//based on what wins, go to results page and unhide winning value
`You are the element ${value}`


//tally results
// function tallyResults () {
//     const submitButton = document.querySelector('#submitButton');        
//     const radioButtons = document.querySelectorAll('input[name="quest1", "quest2", "quest3", "quest4", "quest5"]');
//     submitButton.addEventListener("click", () => {
//         let category;
//         for (const radioButton of radioButtons) {
//             if (radioButton.checked) {
//                 category = radioButton.value;
//                 break;
//             }
//             console.log(value)
//         }
//     }

//Results page declare winner
