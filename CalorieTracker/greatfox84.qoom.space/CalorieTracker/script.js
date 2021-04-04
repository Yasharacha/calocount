function getResults() {
	var weight = document.getElementById('weight')
		.value;
	var height = document.getElementById('height')
		.value;
	var exercise = document.getElementById('exercise')
		.value;
	var gender = document.getElementById('gender')
		.value;
	var age = document.getElementById('age')
		.value;
	var frequency = document.getElementById('frequency')
		.value;
	var goal = document.getElementById('goal')
		.value;

	if (weight.length === 0 || height.length === 0 || exercise.length === 0 || age.length === 0 || gender.length === 0 || frequency.length === 0 || goal.length === 0) {

		return;

	}

	var water = Math.round(((weight * 0.67) + (exercise / 30 * 12)) / 8);
	var bmr;
	var calories;

	if (gender == '1') {
		water = water + 3;
	}
	//Basal Metabolic Rate for woman
	if (gender === '0') {
		bmr = (weight * 4.35) + (height * 4.7) - (age * 4.7) + 655;
	}
	//Basal Metabolic Rate for man	
	if (gender == '1') {
		bmr = (weight * 6.23) + (height * 12.7) - (age * 6.8) + 66;
	}

	calories = Math.round(bmr * frequency / 50) * 50;
	if (goal == "Lose") {
		calories = calories - 500;
	} else if (goal == "Gain") {
		calories = calories + 500;
	}

	//document.getElementById('result')
	//.innerHTML = ''; <-- might not need this stuff 
	var result = '<p>You should consume ' + calories + " calories per day";
	result += "<br> You should drink " + water + " cups of water per day </p>";

	document.getElementById('result')
		.innerHTML = result;
	//document.getElementById('survey_form')
	//.style.display = "none";
	document.getElementById('results_main')
		.style.display = "block";
	document.getElementById('resultsButton')
		.style.display = "none";
	document.getElementById('aboutButton')
		.style.display = "none";
}

function aboutPage() {
	var aboutText = '<p>This is a calorie counter to determine the amount of calories you need to consume each day based on your gender, weight, height, excercise, age, and intent.</p>';
	document.getElementById('aboutText')
		.innerHTML = aboutText;
	document.getElementById('survey_form')
		.style.display = "none";
	document.getElementById('about_Page')
		.style.display = "block";
	document.getElementById('aboutButton')
		.style.display = "none";
}