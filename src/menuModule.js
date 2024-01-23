import Breakfast from './breakfast.jpg';
import Lunch from './lunch.jpg';
import Dinner from './dinner.jpg';

const menuSetter = (() => {
  //const midContent = document.querySelector('.midContent');
  //midContent.remove();

  const removeElements = (() => {
    const midContent = document.querySelector('.midContent');
    while(midContent.firstChild){
      midContent.removeChild(midContent.firstChild);
    }
  });
  
  const addMenuElements = (() => {
    const midContent = document.querySelector('.midContent');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const breakfast = document.createElement('div');
    breakfast.classList.add('breakfast');
    const breakfastTitle = document.createElement('p');
    breakfastTitle.textContent = 'Breakfast';
    const myBreakfast = new Image();
    myBreakfast.src = Breakfast;
    myBreakfast.classList.add('menuImage');
    breakfast.append(breakfastTitle, myBreakfast);
    
    const lunch = document.createElement('div');
    lunch.classList.add('lunch');
    const lunchTitle = document.createElement('p');
    lunchTitle.textContent = 'Lunch';
    const myLunch = new Image();
    myLunch.src = Lunch;
    myLunch.classList.add('menuImage');
    lunch.append(lunchTitle, myLunch);

    const dinner = document.createElement('div');
    dinner.classList.add('dinner');
    const dinnerTitle = document.createElement('p');
    dinnerTitle.textContent = 'Dinner';
    const myDinner = new Image();
    myDinner.src = Dinner;
    myDinner.classList.add('menuImage');
    dinner.append(dinnerTitle, myDinner);



    //midContent.style.flexDirection = 'row';
    menuContainer.append(breakfast, lunch, dinner);
    midContent.append(menuContainer);
  });
  
  
  removeElements();
  addMenuElements();
  
});

export default menuSetter;
