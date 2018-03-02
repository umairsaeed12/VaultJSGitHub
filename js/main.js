
var numberContainer = document.getElementById('number-container'),
numberButtons = document.getElementsByClassName('buttonNumber'),
greenBlock = document.getElementById('GreenBlock'),
redBlock = document.getElementById('RedBlock'),
message = document.getElementById('message'),
intervalTimer = 0,
clickCounter = 0,
numberOne,
numberTwo,
numberThree;
//audio
var correctaudio = new Audio('snd/correct.mp3');
var incorrectaudio = new Audio('snd/incorrect.mp3');

function disableButtons() {
	//used to loop through all buttons and disable them with attribute disable
	//so that it isn't possible to click more then three times
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].setAttribute('disabled', 'disabled');
	}
}

function enableButtons() {
	//used to loop through all buttons and enable them again, remove attribute disabled
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].removeAttribute('disabled');
	}
}

function getNumber(button) {
// console.log(button.value);
clickCounter++;
numberContainer.innerHTML += button.value;
if (clickCounter == 1) {
    numberOne = button.value;
  }else if (clickCounter == 2) {
   numberTwo = button.value;
  }else {
   numberThree = button.value;

    disableButtons()

   if (numberOne == 3 && numberTwo == 1 && numberThree == 1) {
     clickCounter = 0;
     message.innerHTML = "Your code is correct";
		 correctaudio.play();
     var Greenblink = setInterval(function()
		  {
     	//add +1 every time the setinterval function runs
     	intervalTimer++;
     	//method to show div on and off
     	//change the css of the green and red box to create a blinking effect
     	if (greenBlock.style.visibility == 'hidden') {
     		greenBlock.style.visibility = 'visible';
     	}else {
     		greenBlock.style.visibility = 'hidden';
     	}
     	//check if the interval has runned ten times
     	if(intervalTimer == 10) {
				numberContainer.innerHTML = "";
				message.innerHTML = "";
				enableButtons()
     		//ClearInterval function stops the interval after 10 times
     		clearInterval(Greenblink);
				intervalTimer = 0;
				clickCounter = 0;
     	}
 }, 500);
}
   else {
     clickCounter = 0;
      message.innerHTML = "Your code is incorrect";
			incorrectaudio.play();
      var Redblink = setInterval(function() {

      	//add +1 every time the setinterval function runs
      	intervalTimer++;

      	//method to show div on and off
      	//change the css of the green and red box to create a blinking effect
      	if (redBlock.style.visibility == 'hidden') {
      		redBlock.style.visibility = 'visible';
      	}else {
      		redBlock.style.visibility = 'hidden';
      	}

      	//check if the interval has runned ten times
      	if(intervalTimer == 10) {
					numberContainer.innerHTML = "";
					message.innerHTML = "";
					enableButtons()
      		//ClearInterval function stops the interval after 10 times
      		clearInterval(Redblink);
					intervalTimer = 0;
					clickCounter = 0;
      	}
      }, 500);
   }
  }
  console.log(numberOne);
  console.log(numberTwo);
  console.log(numberThree);
}
