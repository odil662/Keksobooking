(function () {
    window.load(function (ads) {
        var fragmentMapPin = document.createDocumentFragment();
        var fragmentMapCard = document.createDocumentFragment();
        var mapPins = document.querySelector('.map__pins');
        var map = document.querySelector('.map');
        var mapFiltersContainer = document.querySelector('.map__filters-container');
        var mapFilters = document.querySelector('.map__filters');

        // window.adsCopy = ads.map(function (it) {
        //     return it;
        // });

        function renderMap () {
            for (let i = 0; i < ads.length; i++) {
                fragmentMapPin.appendChild(window.pin.renderMapPin(ads[i]));
                fragmentMapCard.appendChild(window.card.renderMapCard(ads[i]));
            }
            mapPins.appendChild(fragmentMapPin);
            map.insertBefore(fragmentMapCard, mapFiltersContainer);
        };

            renderMap();
        mapFilters.addEventListener('click', function () {
            const FILTERTYPE = mapFilters.childNodes[1].value;
            const FILTERPRICE= mapFilters.childNodes[3].value;
            const FILTERROOMS = mapFilters.childNodes[5].value;
            const FILTERGUESTS = mapFilters.childNodes[7].value;
            const FILTERFEATURES = mapFilters.childNodes[9].value;

            for (let i = 0; i < ads.length; i++) {
                var ad = ads[i];
                if (FILTERTYPE === 'any') {
                    window.mapPinPostedAd[i].classList.remove('map__pinCurtain');
                } else {
                    ad.offer.type === FILTERTYPE ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                }

                if (FILTERPRICE === 'any') {
                    window.mapPinPostedAd[i].classList.remove('map__pinCurtain');
                } else if (FILTERPRICE === 'middle') {
                    ad.offer.price >= 10000 && ad.offer.price <= 50000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERPRICE === 'low') {
                    ad.offer.price <= 10000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERPRICE === 'high') {
                    ad.offer.price > 50000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                }

                if (FILTERROOMS === 'any') {
                    window.mapPinPostedAd[i].classList.remove('map__pinCurtain');
                } else if (FILTERROOMS === '1') {
                    ad.offer.rooms === 1 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERROOMS === '2') {
                    ad.offer.rooms === 2 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERROOMS === '3') {
                    ad.offer.rooms === 3 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERROOMS === '4') {
                    ad.offer.rooms === 4 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERROOMS === '5') {
                    ad.offer.rooms >= 5 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } 

                if (FILTERGUESTS === 'any') {
                    window.mapPinPostedAd[i].classList.remove('map__pinCurtain');
                } else if (FILTERGUESTS === '1') {
                    ad.offer.guests === 1 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERGUESTS === '2') {
                    ad.offer.guests === 2 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERGUESTS === '5') {
                    ad.offer.guests <= 5 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERGUESTS === '5+') {
                    ad.offer.guests >= 5 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } 

console.log(FILTERFEATURES) 
                }

            }
        );
        
    });
})();