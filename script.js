document.getElementById("submit").addEventListener("click", (e) => {
    let form =document.getElementById('quizForm');
    let title=document.getElementById('title')

    parseAnswers();
    e.preventDefault();
    form.style['display']='none';
    title.style['display']='none';
})

function parseAnswers(){
    let inputs = document.getElementsByTagName("input");
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
    
        if (numOfEarth >=3){
           let results = document.getElementById("earth")
           results.style.display="block"
        }

        else if (numOfAir >=3){
           let results = document.getElementById("air")
           results.style.display="block"
        }

        else if (numOfWater >=3){
           let results = document.getElementById("water")
           results.style.display="block"
        }

        else if (numOfFire >=3){
           let results = document.getElementById("fire")
           results.style.display="block"
        }


        else {
            let results = document.getElementById("mixed")
            results.style.display="block"
        }

    
}
