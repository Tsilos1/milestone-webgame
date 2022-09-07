//event listeners for clicks on each answer

var inputs = document.getElementsByValue('earth', 'air', 'water', 'fire', 'mixed');

for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', check);
}

//check that all questions are answered



