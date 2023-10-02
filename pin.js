(function () {
var mapTemplate = document.querySelector('template');
var mapPinTemplate = mapTemplate.content.querySelector('.map__pin');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

window.pin = {
  renderMapPin: function (ads) {
  var clonedMapPinTemplate = mapPinTemplate.cloneNode(true);
  clonedMapPinTemplate.classList.add('map__pinPostedAd');
  clonedMapPinTemplate.classList.add('map__pinCurtain');

  ads.location.lat = getRandomInt(30, 1170);
  ads.location.lng = getRandomInt(130, 650);

  clonedMapPinTemplate.style.left = ads.location.lat + 'px';
  clonedMapPinTemplate.style.top = ads.location.lng + 'px';
  
  var mapPinImage = clonedMapPinTemplate.childNodes[0];
  mapPinImage.src = ads.author.avatar;
  mapPinImage.alt = ads.offer.title;
 
  return clonedMapPinTemplate;
}
};
})();