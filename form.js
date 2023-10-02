(function () {
  var disabledForm = document.querySelectorAll('fieldset');

for (let i = 0; i < disabledForm.length; i++) {
  disabledForm[i].setAttribute('disabled','')
}

var map = document.querySelector('.map');
var mapPins = map.querySelector('.map__pins');
var mapPinMain = document.querySelector('.map__pin--main');

mapPinMain.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  
  var mapPinsCurtain = document.querySelectorAll('.map__pinCurtain');
  window.mapPinPostedAd = document.querySelectorAll('.map__pinPostedAd');
  var mapCardCurtain = document.querySelectorAll('.map__cardCurtain');
  var popupClose = document.querySelectorAll('.popup__close');
  map.classList.remove('map--faded');

for (let i = 0; i < mapPinsCurtain.length; i++) {
  mapPinsCurtain[i].classList.remove('map__pinCurtain');
}

var notice = document.querySelector('.notice').childNodes[3];
  notice.classList.remove('notice__form--disabled');

for (let i = 0; i < disabledForm.length; i++) {
  disabledForm[i].removeAttribute('disabled','')
}

disabledForm[3].childNodes[3].value = `${mapPinMain.offsetLeft}, ${mapPinMain.offsetTop}`;

for (let i = 0; i < mapPinPostedAd.length; i++) {
  
  mapPinPostedAd[i].addEventListener('click', function() {
    mapCardCurtain[i].classList.remove('map__cardCurtain');
  })

  popupClose[i].addEventListener('click', function() { 
    mapCardCurtain[i].classList.add('map__cardCurtain');
  })
};

var startCoords = {
  x: evt.pageX, 
  y: evt.pageY
}

var dragged = false;

var onMouseMove = function (moveEvt) {
moveEvt.preventDefault();
dragged = true;

var shift = {
  x: startCoords.x - moveEvt.pageX,
  y: startCoords.y - moveEvt.pageY
}

startCoords = {
  x: moveEvt.pageX,
  y: moveEvt.pageY 
}

mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';

};

var onMouseUp = function (upEvt) {
upEvt.preventDefault();

mapPins.removeEventListener('mousemove', onMouseMove);
mapPins.removeEventListener('mouseup', onMouseUp);

disabledForm[3].childNodes[3].value = `${mapPinMain.offsetLeft}, ${mapPinMain.offsetTop}`;
};

mapPins.addEventListener('mousemove', onMouseMove);
mapPins.addEventListener('mouseup', onMouseUp);
});
})();