let form = document.getElementById("quizForm")

var numOfAir = 0;
var numOfEarth = 0;
var numOfFire = 0;
var numOfWater = 0;
var numOfMixed = 0;

const submitButton = document.getElementById ("submit")

submitButton.addEventListener("click", parseAnswers)

// async function submit(){
//     await parseAnswers("inputs");
//     displayFinalResults();
// }

let inputs = document.getElementsByTagName ("input");


function parseAnswers(){
    // let array = []
    for (let i = 0; i < inputs.length; i++){
    let option = inputs[i];

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

        
        console.log("this is air", numOfAir)
        console.log("this is water", numOfWater)
        console.log("this is fire", numOfFire)
        console.log("this is earth", numOfEarth)
        console.log("this is mixed", numOfMixed)
        console.log("parse answers working")
    }
    // return array+["numOfAir = " + numOfAir, "numOfWater = " + numOfWater, "numOfFire = " + numOfFire, "numofEarth = " + numOfEarth, "numOfMixed = " + numOfMixed ]
}


























// function arrayFromArgs() {
//     var results = [];     
//     for (var i = 0; i < arguments.length; i++) {         
//         results.push(arguments[i]);     
//     }     
//         return results; 
//     } 


//     let finalResult = arrayFromArgs(parseAnswers()); 

   
//     console.log(finalResult);


// async function displayFinalResults(){
    
//     console.log("async is working")
//     let result=await parseAnswers()
//     console.log(result)
// }
 
//parse answers then switch
    
    // displayFinalResults()

    // switch (finalResult) {
    //     case numOfMixed >= 2: document.getElementById("mixed").style.display === "block";
    //     break;
    //     case numOfEarth >= 2: document.getElementById("earth").style.display === "block";
    //     break;
    //     case numOfAir >= 2: document.getElementById("air").style.display === "block";
    //     break;
    //     case numOfFire >= 2: document.getElementById("fire").style.display === "block";
    //     break;
    //     case numOfWater >= 2: document.getElementById("water").style.display === "block";
    //     break;
    //     default: console.log("this is the default")
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
