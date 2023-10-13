(function () {
    window.load(function (ads) {
        let fragmentMapPin = document.createDocumentFragment();
        let fragmentMapCard = document.createDocumentFragment();
        let mapPins = document.querySelector('.map__pins');
        let map = document.querySelector('.map');
        let mapFiltersContainer = document.querySelector('.map__filters-container');

        function renderMap () {
            for (let i = 0; i < ads.length; i++) {
                fragmentMapPin.appendChild(window.pin.renderMapPin(ads[i]));
                fragmentMapCard.appendChild(window.card.renderMapCard(ads[i]));
            }
            mapPins.appendChild(fragmentMapPin);
            map.insertBefore(fragmentMapCard, mapFiltersContainer);
        };

        renderMap();
    });
})();