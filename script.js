let submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", () => {
    parseAnswers()
    // e.preventDefault()
})

// let form1 = document.getElementById("quizForm")
// console.log("form", form1)

let inputs = document.getElementsByTagName("input");

console.log("inputs", inputs)

function parseAnswers(){
    let numOfAir = 0;
    let numOfEarth = 0;
    let numOfFire = 0;
    let numOfWater = 0;
    let numOfMixed = 0;
    for (let i = 0; i < inputs.length; i++){
    let option = inputs[i];

        if (option.checked) {
            if (option.value === "air")
            {
            numOfAir++
            }
   
        else if (option.value === "earth")
            {
            numOfEarth++
            }

        else if (option.value ==="fire")
            {
            numOfFire++
            }

        else if (option.value ==="water")
            {
            numOfWater++
            }

        else if (option.value ==="mixed")
            {
            numOfMixed++
            }
        }
    }

        // console.log(inputs)
        console.log("option checked", option.checked)
        console.log("this is air", numOfAir)
        console.log("this is water", numOfWater)
        console.log("this is fire", numOfFire)
        console.log("this is earth", numOfEarth)
        console.log("this is mixed", numOfMixed)
        console.log("parse answers is working")
    
        if (numOfEarth >=3){
            console.log("INSIDE IF STATEMENT")
        //    let results = document.getElementById("earth")
           let h2 = document.createElement("h2")
           h2.textContent = "YOU ARE EARTH"
           body.append(h2)
        }

    
}
    // switch (undefined) {
    //     case numOfEarth >= 3: document.getElementById("earth").style.display = "block";
    //     console.log("earth", numOfEarth)
    //     break;
    //     case numOfAir >= 3: document.getElementById("air").style.display === "block";
    //     break;
    //     case numOfFire >= 3: document.getElementById("fire").style.display === "block";
    //     break;
    //     case numOfWater >= 3: document.getElementById("water").style.display === "block";
    //     break;
    //     // default: document.getElementById("mixed").style.display === "block";
    //     console.log(numOfEarth)
        
    //     console.log("showResultsSection is working")
    // }




//parse answers then switch (async await?)

// let newResults = async function showResultsSection(){
//     let results = await parseAnswers ()

//     console.log('these are the new totals', results)

//     }
    

    
    
//     return showResultsSection()

// }


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
    
