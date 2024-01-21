import './styles.css';
import MidSetter from './homeModule.js';
import menuSetter from './menuModule.js';


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

    const btnSetter = (() => {
      menuLink.addEventListener('click', menuSetter);      
    });
    
    btnSetter();

  });

  const footerSetter = (() => {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    mainContainer.appendChild(footer);
    const gitUser = document.createElement('a');
    gitUser.classList.add('gitUser');
    gitUser.textContent = '@Ladinofel 2023';
    footer.append(gitUser);
  });
  


  headerSetter();
  MidSetter();
  footerSetter();

 
})();


