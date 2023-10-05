(function () {
    window.load(function (ads) {
        var fragmentMapPin = document.createDocumentFragment();
        var fragmentMapCard = document.createDocumentFragment();
        var mapPins = document.querySelector('.map__pins');
        var map = document.querySelector('.map');
        var mapFiltersContainer = document.querySelector('.map__filters-container');
        var mapFilters = document.querySelector('.map__filters');
        var mapFilterSet = document.querySelector('.map__filter-set');
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

        mapFilters.childNodes[1].addEventListener('click', function () {
            const FILTERTYPE = mapFilters.childNodes[1].value;
            for (let i = 0; i < ads.length; i++) {
                var ad = ads[i];
                if (FILTERTYPE === 'any') {
                    window.mapPinPostedAd[i].classList.remove('map__pinCurtain');
                } else {
                    ad.offer.type === FILTERTYPE ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                }
            }
        });
        
        mapFilters.childNodes[3].addEventListener('click', function() {
            const FILTERPRICE= mapFilters.childNodes[3].value;
            for (let i = 0; i < ads.length; i++) {
                var ad = ads[i];
                if (FILTERPRICE === 'any') {
                    window.mapPinPostedAd[i].classList.remove('map__pinCurtain');
                } else if (FILTERPRICE === 'middle') {
                    ad.offer.price >= 10000 && ad.offer.price <= 50000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERPRICE === 'low') {
                    ad.offer.price <= 10000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                } else if (FILTERPRICE === 'high') {
                    ad.offer.price > 50000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                }
            }
        });

        mapFilters.childNodes[5].addEventListener('click', function() {
            const FILTERROOMS = mapFilters.childNodes[5].value;
            for (let i = 0; i < ads.length; i++) {
                var ad = ads[i];
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
            }
        });

        mapFilters.childNodes[7].addEventListener('click', function() {
            const FILTERGUESTS = mapFilters.childNodes[7].value;
            for (let i = 0; i < ads.length; i++) {
                var ad = ads[i];
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
            }
        });

        mapFilters.childNodes[9].addEventListener('click', function() {
            let wifi = mapFilterSet.childNodes[1].checked;
            let dishwasher = mapFilterSet.childNodes[5].checked;
            let parking = mapFilterSet.childNodes[9].checked;
            let washer = mapFilterSet.childNodes[13].checked;
            let elevator = mapFilterSet.childNodes[17].checked;
            let conditioner = mapFilterSet.childNodes[21].checked;
            let features = [];

            function addFeatures(item) {
                features.push(item);
            }

            if (wifi) {
                addFeatures("wifi");
            }
            if (dishwasher) {
                addFeatures("dishwasher");
            }
            if (parking) {
                addFeatures("parking");
            }
            if (washer) {
                addFeatures("washer");
            }
            if (elevator) {
                addFeatures("elevator");
            }
            if (conditioner) {
                addFeatures("conditioner");
            }
            console.log(features)
            for (let i = 0; i < ads.length; i++) {
                var ad = ads[i];
                for (let j of features) {
                  if (ad.offer.features[i] == features[j]) {
                    console.log(j);
                  }
                } 
            }
        });

        




            
        // mapFilterSet.childNodes[3].addEventListener('click', function() {
        //     const WIFI = mapFilterSet.childNodes[1].value;
        //     for (let i = 0; i < ads.length; i++) {
        //         var ad = ads[i];
        //          if (WIFI) {
        //             ad.offer.features.includes(WIFI) ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
        //     console.log('yes')
        //         } else {'No'}
        //     }
        // });

        // mapFilterSet.childNodes[7].addEventListener('click', function() {
        //     const DISHWASHER = mapFilterSet.childNodes[5].value;
            
        //     console.log(DISHWASHER)
        // });
        // mapFilterSet.childNodes[11].addEventListener('click', function() {
        //     const PARKING = mapFilterSet.childNodes[9].value;
            
        //     console.log(PARKING)
        // });
        // mapFilterSet.childNodes[15].addEventListener('click', function() {
        //     const WASHER = mapFilterSet.childNodes[13].value;
            
        //     console.log(WASHER)
        // });
        // mapFilterSet.childNodes[19].addEventListener('click', function() {
        //     const ELEVATOR = mapFilterSet.childNodes[17].value;
            
        //     console.log(ELEVATOR)
        // });
        // mapFilterSet.childNodes[23].addEventListener('click', function() {
        //     const CONDITIONER = mapFilterSet.childNodes[21].value;
            
        //     console.log(CONDITIONER)
        // });
        

    });
})();