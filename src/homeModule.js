
const homeSetter = (() => {
  const mainContainer = document.getElementById('content');

  const headerSetter = (() => {
    const header = document.createElement('div');
    header.classList.add('header');
    mainContainer.appendChild(header);
    const homeLink = document.createElement('a');
    homeLink.textContent = "Home";
    const menuLink = document.createElement('a');
    menuLink.textContent = "Menu";
    const contactLink = document.createElement('a');
    contactLink.textContent = "Contact";
    header.append(homeLink, menuLink, contactLink);
  });

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
    midContent.append(mainTitle, slogan);
  });

  const footerSetter = (() => {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    mainContainer.appendChild(footer);
    const gitUser = document.createElement('p');
    gitUser.classList.add('gitUser');
    gitUser.textContent = '@Ladinofel 2023';
    footer.append(gitUser);
  });
  
  headerSetter();
  midContentSetter();
  footerSetter();
 
})();