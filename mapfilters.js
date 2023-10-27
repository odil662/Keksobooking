(function () {
    window.load(function (ads) {
       
        let mapFilters = document.querySelector('.map__filters');
        let mapFilterSet = document.querySelector('.map__filter-set');

        function filter () {
            let filters = {
                typeFilter: 'any',
                priceFilter: 'any',
                roomsFilter: 'any',
                guestFilter: 'any',
                wifi: false,
                dishwasher: false,
                parking: false,
                washer: false,
                elevator: false,
                conditioner: false 
            }

            const showAd = (index) => {
                window.mapPinPostedAd[index].classList.remove('map__pinCurtain')
            }
            
            const hideAd = (index) =>  {
                window.mapPinPostedAd[index].classList.add('map__pinCurtain')
            }

            function isAdApproachByType (type) {
                if (filters.typeFilter === 'any') {
                    return true
                }
                if (filters.typeFilter !== 'any') {
                    if (type !== filters.typeFilter) return false
                    else return true
                }
            }

            function filterByType () {
                for (let i = 0; i < ads.length; i++) {
                    if (!isAdApproachByType(ads[i].offer.type)) hideAd(i)
                }
            }

            const isAdApproachByPrice = (price) => { 
                if (filters.priceFilter === 'any') {
                    return true
                }
                if (filters.priceFilter === 'low') {
                    if (price > 10000) return false
                    else return true
                }
                if (filters.priceFilter === 'middle') {
                    if (price < 10000 || price > 50000) return false
                    else return true
                }
                if (filters.priceFilter === 'high') {
                    if (price < 50000) return false
                    else return true
                }
            }
 
            function filterByPrice () {
                for (let i = 0; i < ads.length; i++) {
                        if (!isAdApproachByPrice(ads[i].offer.price)) hideAd(i)
                    }
            }

            function isAdApproachByRooms(rooms) {
                if (filters.roomsFilter === 'any') {
                    return true
                }
                if (filters.roomsFilter === '1' || filters.roomsFilter === '2' 
                || filters.roomsFilter === '3' || filters.roomsFilter === '4') {
                    if (rooms !== Number(filters.roomsFilter)) return false
                    else return true
                } 
                if (filters.roomsFilter === '5') {
                    if (rooms < 5) return false
                    else return true
                } 
            }

            function filterByRooms () {
                for (let i = 0; i < ads.length; i++) {
                    if (!isAdApproachByRooms(ads[i].offer.rooms)) hideAd(i)
                }
            }

            function isAdApproachByGuests(guests) {
                if (filters.guestFilter === 'any') {
                    return true
                }
                if (filters.guestFilter === '1' || filters.guestFilter === '2') {
                    if (guests !== Number(filters.guestFilter)) return false
                    else return true
                } 
                if (filters.guestFilter === '5') {
                    if (guests < 3 || guests > 5) return false
                    else return true
                } 
                if (filters.guestFilter === '6') {
                    if (guests < 6) return false
                    else return true
                } 
            }

            function filterByGuests () {
                for (let i = 0; i < ads.length; i++) {
                     if (!isAdApproachByGuests(ads[i].offer.guests)) hideAd(i)
                }
            }

            const isAdApproachByFeatures = (arr) => {
                if (arr === undefined) return false 
                const filterObj = {}
                const list = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
                list.forEach(value => {
                    filterObj[value] = filters[value]
                })
                for (let key in filterObj) {
                    if (filterObj[key] && !arr.includes(key)) return false
                }
                return true
            }
            
            const filterByFeatures = () => {
                for (let i = 0; i < ads.length; i++) {
                    if (!isAdApproachByFeatures(ads[i].offer.features)) hideAd(i)
                }
            }

            const showAllAds = () => {
                for (let i = 0; i < ads.length; i++) {
                    showAd(i)
                }
            }

            function filterHandler () {
                showAllAds()
                filterByType()
                filterByPrice()
                filterByRooms()
                filterByGuests()
                filterByFeatures()
            }

            mapFilters.childNodes[1].addEventListener('change', function () {
                filters.typeFilter = mapFilters.childNodes[1].value;
                filterHandler();
            });
            
            mapFilters.childNodes[3].addEventListener('change', function() {
                filters.priceFilter = mapFilters.childNodes[3].value;
                filterHandler();
            });

            mapFilters.childNodes[5].addEventListener('change', function() {
                filters.roomsFilter = mapFilters.childNodes[5].value;
                filterHandler();
            });

            mapFilters.childNodes[7].addEventListener('change', function() {
                filters.guestFilter = mapFilters.childNodes[7].value;
                filterHandler();
            });

            mapFilters.childNodes[9].addEventListener('change', function() {
                filters.wifi = mapFilterSet.childNodes[1].checked;
                filters.dishwasher = mapFilterSet.childNodes[5].checked;
                filters.parking = mapFilterSet.childNodes[9].checked;
                filters.washer = mapFilterSet.childNodes[13].checked;
                filters.elevator = mapFilterSet.childNodes[17].checked;
                filters.conditioner = mapFilterSet.childNodes[21].checked;
                filterHandler();
            });
    } 
    filter();
    });
})();