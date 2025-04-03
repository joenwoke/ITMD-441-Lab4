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
  
  // Requirement 4 – Match navbar background to footer
  const header = document.querySelector('header');
  const footerColor = getComputedStyle(document.querySelector('footer')).backgroundColor;
  header.style.backgroundColor = footerColor;
  
  //Requirement 5 -- Remove the "Get Started" button
  const possibleButtons = document.querySelectorAll('a, button');
  possibleButtons.forEach(btn => {
    if (btn.textContent.trim() === 'Get Started') {
      btn.remove();
    }
  });
  
  //Requirements 6 -- Center-align section headings
  ['Services', 'Solutions', 'Contact'].forEach(text => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h2 => h2.textContent.trim().includes(text));
    if (heading) {
      heading.style.textAlign = 'center';
    }
  });
})();