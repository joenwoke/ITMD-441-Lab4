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
  
  // Requirement 7 – Make service icons green
  document.querySelectorAll('#services .material-symbols-outlined').forEach(icon => {
    icon.style.color = '#47C714';
  });
  
  // Requirement 8 -- Chanage the Digital Marketing Icon to 'ads_click'
  const digitalIcon = Array.from(document.querySelectorAll('.material-symbols-outlined')).find(el => el.closest('.service, .tile, div')?.textContent.toLowerCase().includes('digital'));
  if (digitalIcon) {
    digitalIcon.textContent = 'ads_click';
  }
  
  //Requirement 9 -- Change grid tile of solutions at >= 1024px
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 1024px) {
      [data-section="product_cards"] {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(style);
  
  //Requirement 10 -- Change the "Musician's tile image
  const tiles = document.querySelectorAll('[data-section="product_cards"] > div');
  const img = tiles[tiles.length - 1]?.querySelector('img');
  if (img) {
    img.src = 'https://picsum.photos/id/453/400/300';
  }
})();