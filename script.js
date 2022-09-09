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
form.addEventListener('submit', (event) => {
    parseAnswers("quest1")
    parseAnswers("quest2")
    parseAnswers("quest3")
    parseAnswers("quest4")
    parseAnswers("quest5")
})


function parseAnswers (parseAnswers){
    var inputs = document.getElementsByName(answers)
    for (let i = 0; i < inputs.length; i++)
    {
        if (inputs[i].value == "air" && inputs[i].checked)
        {
            numOfAir++
        }
        if (inputs[i].value == "water" && inputs[i].checked)
        {
            numOfWater++
        }
        if (inputs[i].value == "fire" && inputs[i].checked)
        {
            numOfFire++
        }
        if (inputs[i].value == "earth" && inputs[i].checked)
        {
            numOfEarth++
        }
        if (inputs[i].value == "mixed" && inputs[i].checked)
        {
            numOfMixed++
        }
    }
}



//unhide default of display:none
//     var earth = document.getElementByInputValue("earth");
//     var air = document.getElementByInputValue("air");
//     var water = document.getElementByInputValue("water");
//     var fire = document.getElementByInputValue("fire");
//     var mixed = document.getElementByInputValue("mixed");

//     if (earth>1){
//         if(earth.style.display === "none"){
//             earth.style.display = "block";}
//         }
//         else{
//             earth.style.display="none";
//         }    

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
