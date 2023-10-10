(function () {
  let mapTemplate = document.querySelector('template');  
  let mapCardTemplate = mapTemplate.content.querySelector('.map__card');

  window.card = {
    renderMapCard: function (ads) {
      let clonedMapCardTemplate = mapCardTemplate.cloneNode(true);
      clonedMapCardTemplate.classList.add('map__cardCurtain');  
      clonedMapCardTemplate.querySelector('h3').textContent = ads.offer.title;
      clonedMapCardTemplate.querySelector('small').textContent = ads.offer.address;
      clonedMapCardTemplate.querySelector('.popup__price').textContent = ads.offer.price + ' ₽/ночь';
  
      if (ads.offer.type === 'flat') {
        clonedMapCardTemplate.querySelector('h4').textContent = 'Квартира';
      } else if (ads.offer.type === 'bungalow') {
        clonedMapCardTemplate.querySelector('h4').textContent = 'Бунгало';
      } else if (ads.offer.type === 'house') {
        clonedMapCardTemplate.querySelector('h4').textContent = 'Дом';
      } else if (ads.offer.type === 'palace') {
        clonedMapCardTemplate.querySelector('h4').textContent = 'Дворец';
      } else if (ads.offer.type === 'hotel') {
        clonedMapCardTemplate.querySelector('h4').textContent = 'Отель'};
  
      if (ads.offer.rooms === 1) {
        clonedMapCardTemplate.querySelectorAll('p')[2].textContent = ads.offer.rooms + ' комната для ' + ads.offer.guests + ' гостей';
      } else if (ads.offer.rooms > 1 && ads.offer.rooms <= 4) {
        clonedMapCardTemplate.querySelectorAll('p')[2].textContent = ads.offer.rooms + ' комнаты для ' + ads.offer.guests + ' гостей';
      } else if (ads.offer.rooms > 1 && ads.offer.rooms > 5) {
        clonedMapCardTemplate.querySelectorAll('p')[2].textContent = ads.offer.rooms + ' комнат для ' + ads.offer.guests + ' гостей';
      }

      clonedMapCardTemplate.querySelectorAll('p')[3].textContent = 'Заезд после ' + ads.offer.checkin + ', выезд до ' + ads.offer.checkout;
      
      let popupFeatures = clonedMapCardTemplate.querySelector('.popup__features');

      while (popupFeatures.firstChild) {
       popupFeatures.removeChild(popupFeatures.firstChild);
      }  

      if (ads.offer.features) {
        for (let i = 0; i < ads.offer.features.length; i++) {
          let liTextContent = ads.offer.features[i];
          let liCreate = document.createElement('li');
          liCreate.classList.add('feature');
          liCreate.classList.add(`feature--${liTextContent}`);
          let popupFeaturesChildCreate = popupFeatures.appendChild(liCreate); 
        }
      }
      
      clonedMapCardTemplate.querySelectorAll('p')[4].textContent = ads.offer.description;
      
      let liMapCardPicturesParent = clonedMapCardTemplate.querySelector('.popup__pictures');
      
      while (liMapCardPicturesParent.firstChild) {
        liMapCardPicturesParent.removeChild(liMapCardPicturesParent.firstChild);
      }

      if (ads.offer.photos) {
        for (let i = 0; i < ads.offer.photos.length; i++) {
          let liCreate = document.createElement('li');
          let liMapCardPicturesCreate = liMapCardPicturesParent.appendChild(liCreate);
        }
      } 

      let mapCardPicturesParent = liMapCardPicturesParent.querySelectorAll('li');

      for (let i = 0; i < mapCardPicturesParent.length; i++) {   
        let imgCreate = document.createElement('img');
        let liChildCreate = mapCardPicturesParent[i].appendChild(imgCreate);

        liMapCardPicturesParent.childNodes[i].childNodes[0].setAttribute('src', `${ads.offer.photos[i]}`);
      };

      clonedMapCardTemplate.querySelector('.popup__avatar').src = ads.author.avatar;

      return clonedMapCardTemplate;
    }
  }
})();