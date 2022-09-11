//find and display winning result values
// function displayValues() {
//     document.getElementById("results").innerHTML = "";
//     var ele = document.getElementsByTagName('input');
      
//     for(i = 0; i < ele.length; i++) {
          
//         if(ele[i].type="radio") {
          
//             if(ele[i].checked)
//                 document.getElementById("results").innerHTML
//                         += ele[i].name + " Value: "
//                         + ele[i].value + "<br>";
//         }
//     }
// }

let form = document.getElementById("quizForm")

var numOfAir = 0
var numOfEarth = 0
var numOfFire = 0
var numOfWater = 0
var numOfMixed = 0

const submitButton = document.getElementById ("submit")

submitButton.addEventListener("click", () => {
parseAnswers("inputs")})

// let totalAir = numOfAir++
// console.log("this is", totalAir)

let inputs = document.getElementsByTagName ("input");

console.log(inputs)

function parseAnswers(){

    for (let i = 0; i < inputs.length; i++){
        console.log(inputs)
    let option = inputs[i];
console.log(option.checked)
        if (option.checked) {
            if (option.value == "air")
            {
            numOfAir++
            }
   
        else if (option.value == "earth")
            {
            numOfEarth++
            }

        else if (option.value =="fire")
            {
            numOfFire++
            }

        else if (option.value =="water")
            {
            numOfWater++
            }

        else if (option.value =="mixed")
            {
            numOfMixed++
            }
        }

        console.log ("This is earth", numOfEarth)
        console.log ("This is air", numOfAir)
        console.log ("This is fire", numOfFire)
        console.log ("This is water", numOfWater)
        console.log ("This is mixed", numOfMixed)
    }
    }


// async await?

// switch (showResult) {
//     case numOfEarth >1: document.getElementById("earth").style.display === "block"
//     break;
//     case numOfAir >1: document.getElementById("air").style.display === "block"
//     break;
//     case numOfFire >1: document.getElementById("fire").style.display === "block"
//     break;
//     case numOfWater >1: document.getElementById("water").style.display === "block"
//     break;
//     case numOfMixed >1: document.getElementById("mixed").style.display === "block"
//     break;
// }
        // else{
        //     earth.style.display="none";
        // }    

//     if (air>1){
//         if(air.style.display === "none"){
//             air.style.display = "block";
//         }
//         else{
//             air.style.display="none";
//         }

//     if (water>1){
//         if(water.style.display === "none"){
//             water.style.display = "block";
//         }
//         else{
//             water.style.display="none";
//         }    
//     }

//     if (fire>1){
//         if(fire.style.display === "none"){
//             fire.style.display = "block";
//         }
//         else{
//             fire.style.display="none";
//         }    
//     }

//     if (mixed>1){
//         if(mixed.style.display === "none"){
//             mixed.style.display = "block";
//         }
//         else{
//             mixed.style.display="none";
//         }    
//     }
// }


// switch(results){
//     case earth:
//         text="You are earth";
//         break;
//     case air:
//         text="You are air";
//         break;
//     case water:
//         text="You are water";
//         break;
//     case fire:
//         text="You are fire";
//         break;
//     case mixed:
//         text="You are mixed";
//         break;
// }



//do I need to create poll in JS to create an array to go through questions and find the answer to each question?
//example cont array = [quest1, quest2, quest3, quest4, quest5];




//sum winning values to determine a winner (if/else if)
//if quest1 = earth += +1 earth (else if for air, water, fire, mixed)
//if quest2 (same as above)
//if quest3 (same as above)
//if quest4 (same as above)
//if quest5 (same as above)





//add totals of sum winning values




//if 2 earth, then earth wins
//else if 2 air, then air wins
//else if 2 water, then water wins
//else if if 2 fire, then fire wins
//else mixed wins


//based on what wins, go to results page and unhide winning value
// `You are the element ${value}`


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
