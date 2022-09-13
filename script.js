let form = document.getElementById("quizForm")

var numOfAir = 0;
var numOfEarth = 0;
var numOfFire = 0;
var numOfWater = 0;
var numOfMixed = 0;

const submitButton = document.getElementById ("submit")

submitButton.addEventListener("click", parseAnswers)

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

        // console.log(inputs)
        console.log("this is air", numOfAir)
        console.log("this is water", numOfWater)
        console.log("this is fire", numOfFire)
        console.log("this is earth", numOfEarth)
        console.log("this is mixed", numOfMixed)
        console.log("parse answers is working")
    
    }

//parse answers then switch (async await?)

async function showResultsSection(){
    let results = await parseAnswers.all ([
        numOfAir(),
        numOfEarth(),
        numOfFire(),
        numOfMixed(),
        numOfWater()
    ])

    console.log('these are the new totals', results)

    showResultsSection()
    }


    switch (showResultsSection) {
        case numOfEarth >= 3: document.getElementById("earth").style.display = "block";
        break;
        case numOfAir >= 3: document.getElementById("air").style.display === "block";
        break;
        case numOfFire >= 3: document.getElementById("fire").style.display === "block";
        break;
        case numOfWater >= 3: document.getElementById("water").style.display === "block";
        break;
        default: document.getElementById("mixed").style.display === "block";
        
        console.log("showResultsSection is working")
    }
    
    return showResultsSection()

}


//     return array+["numOfAir = " + numOfAir, "numOfWater = " + numOfWater, "numOfFire = " + numOfFire, "numofEarth = " + numOfEarth, "numOfMixed = " + numOfMixed ]
// function numOfAir(result) {
//     console.log(`The new total num of air is: ${numOfAir}`)
// }























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
    
