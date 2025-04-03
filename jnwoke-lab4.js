// Joseph Nwoke
//ITMD 441-01 Undergraduate Student

(function () {
	//Requirement 1 -- Change the hero message
	document.querySelector('h1').textContent = "Uplift Your Brand with Stellar Marketing";
	
	//Reuqirement 2 -- Chnage the line below hero headline
	document.querySelector('p').innerHTML = 'Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive and excel.</em></strong>';
	
	// Requirement 3 – Change the background image of the hero section
	const hero = document.querySelector('h1')?.parentElement;
	if (hero) {
		hero.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
		hero.style.backgroundSize = "cover";
		hero.style.backgroundPosition = "center";
		hero.style.backgroundRepeat = "no-repeat";
	}
})();