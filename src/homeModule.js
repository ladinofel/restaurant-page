import Logo from './cup.png';

const MidSetter = (() => {
  const mainContainer = document.getElementById('content');
  const midContentSetter = (() => {
    const midContent = document.createElement('div');
    midContent.classList.add('midContent');
    mainContainer.appendChild(midContent);
    const mainTitle = document.createElement('p');
    mainTitle.classList.add('mainTitle');
    mainTitle.textContent = 'The Caffeine Collective';
    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = 'Where Great Coffee Fuels Greater Work.';
    const midLogo = document.createElement('div');
    midLogo.classList.add('midLogo');
    const myLogo = new Image();
    myLogo.src = Logo;
    midLogo.appendChild(myLogo);
    midContent.append(mainTitle, slogan, midLogo);
  });
 
  midContentSetter();
 
});

export default MidSetter;