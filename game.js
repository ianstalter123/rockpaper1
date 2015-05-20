// var user_choice = prompt("Rock, paper or scissors")
var choices = ["rock","paper","scissors"]

var wins = 0;
var losses = 0;
var match = document.querySelector('.match');
//console.log(choices[c_choice])


document.querySelector('.rock').addEventListener('mousedown',function()
	{
		var c_choice = Math.floor(Math.random() * 3);
		match.innerHTML ='computer chose : ' + choices[c_choice]

		console.log(choices[c_choice]);
		if (choices[c_choice] === 'rock')
		{
			console.log('tie');
		}
		else if (choices[c_choice] === 'paper') {
			losses += 1;
			document.querySelector('.losses').innerHTML = losses;

		}
		else
		{
			wins += 1;
			document.querySelector('.wins').innerHTML = wins;

		}

})

document.querySelector('.paper').addEventListener('mousedown',function()
{
	var c_choice = Math.floor(Math.random() * 3);
	match.innerHTML ='computer chose : ' + choices[c_choice]

		console.log(choices[c_choice]);
		if (choices[c_choice] === 'paper')
		{
			console.log('tie');
		}
		else if (choices[c_choice] === 'scissors') {
			losses += 1;
			document.querySelector('.losses').innerHTML = losses;

		}
		else
		{
			wins += 1;
			document.querySelector('.wins').innerHTML = wins;

		}
})

document.querySelector('.scissors').addEventListener('mousedown',function()
	{ 
		var c_choice = Math.floor(Math.random() * 3);

		match.innerHTML ='computer chose : ' + choices[c_choice]
			console.log(choices[c_choice]);
		if (choices[c_choice] === 'scissors')
		{
			console.log('tie');
		}
		else if (choices[c_choice] === 'rock') {
			losses += 1;
			document.querySelector('.losses').innerHTML = losses;

		}
		else
		{
			wins += 1;
			document.querySelector('.wins').innerHTML = wins;

		}
})

