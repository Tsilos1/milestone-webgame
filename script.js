document.getElementById("submitButton").addEventListener("click", (e) => {
    let form =document.getElementById('quizForm');
    
    parseAnswers();
    e.preventDefault();
    form.style['display']='none';
})

//     }
// }

// let inputs = document.getElementsByTagName("input");

// console.log("inputs", inputs)

function parseAnswers(){
    let inputs = document.getElementsByTagName("input");
    console.log("PARSING!!")
    let numOfAir = 0;
    let numOfEarth = 0;
    let numOfFire = 0;
    let numOfWater = 0;
    let numOfMixed = 0;
    for (let i = 0; i < inputs.length; i++){

        if (inputs[i].checked) {
            if (inputs[i].value === "air")
            {
            numOfAir++
            }
   
        else if (inputs[i].value === "earth")
            {
            numOfEarth++
            }

        else if (inputs[i].value ==="fire")
            {
            numOfFire++
            }

        else if (inputs[i].value ==="water")
            {
            numOfWater++
            }

        else if (inputs[i].value ==="mixed")
            {
            numOfMixed++
            }
        }
    }

        // console.log(inputs)
        // console.log("option checked", option.checked)
        console.log("this is air", numOfAir)
        console.log("this is water", numOfWater)
        console.log("this is fire", numOfFire)
        console.log("this is earth", numOfEarth)
        console.log("this is mixed", numOfMixed)
        console.log("parse answers is working")
    
        if (numOfEarth >=3){
            console.log("INSIDE IF STATEMENT")
           let results = document.getElementById("earth")
           results.style.display="block"
        }

        if (numOfAir >=3){
            console.log("INSIDE IF STATEMENT")
           let results = document.getElementById("air")
           results.style.display="block"
        }

        if (numOfWater >=3){
            console.log("INSIDE IF STATEMENT")
           let results = document.getElementById("water")
           results.style.display="block"
        }

        if (numOfFire >=3){
            console.log("INSIDE IF STATEMENT")
           let results = document.getElementById("fire")
           results.style.display="block"
        }

        if (numOfMixed >=3){
            console.log("INSIDE IF STATEMENT")
           let results = document.getElementById("mixed")
           results.style.display="block"
        }

    
}
