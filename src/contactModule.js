const contactSetter = (() => {

  const removeElements = (() => {
    const midContent = document.querySelector('.midContent');
    while(midContent.firstChild){
      midContent.removeChild(midContent.firstChild);
    }
  });

  const addContactElements = (() => {
    const midContent = document.querySelector('.midContent');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    const contactTitle = document.createElement('p');
    contactTitle.textContent = 'Contact Information';
    const address = document.createElement('p');
    address.textContent = 'Address: 413 Boulevard Road - Kensington';
    const phone = document.createElement('p');
    phone.textContent = 'Phone Number: 614 345 678 45';
    const email = document.createElement('p');
    email.textContent = "For reservations shoot us an email at thecollective@aol.uk";

    contactContainer.append(contactTitle, address, phone, email);
    midContent.append(contactContainer);    
  });

  removeElements();
  addContactElements();

});

export default contactSetter;