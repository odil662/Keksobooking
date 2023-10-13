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
            }; 

            function filterByType () {
                for (let i = 0; i < ads.length; i++) {
                    let ad = ads[i];
                    ad.offer.type === filters.typeFilter ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') 
                    : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                }
            };

            function checkPriceByType () {
                for (let i = 0; i < ads.length; i++) {
                    let ad = ads[i];
                    if (filters.priceFilter === 'middle' && filters.typeFilter !== 'any') {
                        ad.offer.type === filters.typeFilter && ad.offer.price >= 10000 && ad.offer.price <= 50000 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.priceFilter === 'low' && filters.typeFilter !== 'any') {
                        ad.offer.type === filters.typeFilter && ad.offer.price <= 10000 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.priceFilter === 'high' && filters.typeFilter !== 'any') {
                        ad.offer.type === filters.typeFilter && ad.offer.price > 50000 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                }
            }

            function filterByPrice () {
                for (let i = 0; i < ads.length; i++) {
                        let ad = ads[i];
                        if (filters.priceFilter === 'middle') {
                            ad.offer.price >= 10000 && ad.offer.price <= 50000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') 
                            : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                        } else if (filters.priceFilter === 'low') {
                            ad.offer.price <= 10000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') 
                            : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                        } else if (filters.priceFilter === 'high') {
                            ad.offer.price > 50000 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') 
                            : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                        }
                    }
            }

            function priceNumberPerString (numb) {
                if (numb < 10000) {
                   numb = 'low';
                } else if (numb >= 10000 && numb <= 50000) {
                    numb = 'middle';
                } else if (numb > 50000) {
                    numb = 'high';
                }
                return numb;
            }
            
            function checkRoomsByPriceByType () {
                for (let i = 0; i < ads.length; i++) {
                    let ad = ads[i];
                    if (filters.roomsFilter === '1' && filters.priceFilter !== 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 1 && ad.offer.type === filters.typeFilter && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '1' && filters.priceFilter !== 'any' && filters.typeFilter === 'any') {
                        ad.offer.rooms === 1 && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '1' && filters.priceFilter === 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 1 && ad.offer.type === filters.typeFilter  
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                    
                    if (filters.roomsFilter === '2' && filters.priceFilter !== 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 2 && ad.offer.type === filters.typeFilter && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '2' && filters.priceFilter !== 'any' && filters.typeFilter === 'any') {
                        ad.offer.rooms === 2 && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '2' && filters.priceFilter === 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 2 && ad.offer.type === filters.typeFilter  
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                    
                    if (filters.roomsFilter === '3' && filters.priceFilter !== 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 3 && ad.offer.type === filters.typeFilter && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '3' && filters.priceFilter !== 'any' && filters.typeFilter === 'any') {
                        ad.offer.rooms === 3 && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '3' && filters.priceFilter === 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 3 && ad.offer.type === filters.typeFilter  
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }

                    if (filters.roomsFilter === '4' && filters.priceFilter !== 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 4 && ad.offer.type === filters.typeFilter && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '4' && filters.priceFilter !== 'any' && filters.typeFilter === 'any') {
                        ad.offer.rooms === 4 && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '4' && filters.priceFilter === 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms === 4 && ad.offer.type === filters.typeFilter  
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }

                    if (filters.roomsFilter === '5' && filters.priceFilter !== 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms >= 5 && ad.offer.type === filters.typeFilter && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '5' && filters.priceFilter !== 'any' && filters.typeFilter === 'any') {
                        ad.offer.rooms >= 5 && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '5' && filters.priceFilter === 'any' && filters.typeFilter !== 'any') {
                        ad.offer.rooms >= 5 && ad.offer.type === filters.typeFilter  
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                }
            }

            function filterByRooms () {
                for (let i = 0; i < ads.length; i++) {
                    let ad = ads[i];
                    if (filters.roomsFilter === '1') {
                        ad.offer.rooms === 1 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '2') {
                        ad.offer.rooms === 2 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '3') {
                        ad.offer.rooms === 3 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '4') {
                        ad.offer.rooms === 4 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.roomsFilter === '5') {
                        ad.offer.rooms >= 5 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } 
                     
                }
            }

            function stringPerNumber (str) {
                return Number(str);
            } 

            function checkGuestsByRoomsByPriceByType () {
                for (let i = 0; i < ads.length; i++) {
                    let ad = ads[i];
                    if (filters.roomsFilter !== 'any' && filters.priceFilter !== 'any' && filters.typeFilter !== 'any') {
                        (ad.offer.guests === stringPerNumber(filters.guestFilter) && ad.offer.guests <= 2 
                        || ad.offer.guests >= 3 && ad.offer.guests <= 5 && stringPerNumber(filters.guestFilter) === 5
                        || ad.offer.guests > 6 && stringPerNumber(filters.guestFilter) === 6)
                        && (ad.offer.rooms === stringPerNumber(filters.roomsFilter) || ad.offer.rooms > 5 && stringPerNumber(filters.roomsFilter) === 5)
                        && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        && ad.offer.type === filters.typeFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }

                    if (filters.roomsFilter === 'any' && filters.priceFilter !== 'any' && filters.typeFilter !== 'any') {
                        (ad.offer.guests === stringPerNumber(filters.guestFilter) && ad.offer.guests <= 2 
                        || ad.offer.guests >= 3 && ad.offer.guests <= 5 && stringPerNumber(filters.guestFilter) === 5
                        || ad.offer.guests > 6 && stringPerNumber(filters.guestFilter) === 6)   
                        && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        && ad.offer.type === filters.typeFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
    
                    if (filters.roomsFilter !== 'any' && filters.priceFilter === 'any' && filters.typeFilter !== 'any') {
                        (ad.offer.guests === stringPerNumber(filters.guestFilter) && ad.offer.guests <= 2 
                        || ad.offer.guests >= 3 && ad.offer.guests <= 5 && stringPerNumber(filters.guestFilter) === 5
                        || ad.offer.guests > 6 && stringPerNumber(filters.guestFilter) === 6)
                        && (ad.offer.rooms === stringPerNumber(filters.roomsFilter) || ad.offer.rooms > 5 && stringPerNumber(filters.roomsFilter) === 5) 
                        && ad.offer.type === filters.typeFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                    
                    if (filters.roomsFilter !== 'any' && filters.priceFilter !== 'any' && filters.typeFilter === 'any') {
                        (ad.offer.guests === stringPerNumber(filters.guestFilter) && ad.offer.guests <= 2 
                        || ad.offer.guests >= 3 && ad.offer.guests <= 5 && stringPerNumber(filters.guestFilter) === 5
                        || ad.offer.guests > 6 && stringPerNumber(filters.guestFilter) === 6)
                        && (ad.offer.rooms === stringPerNumber(filters.roomsFilter) || ad.offer.rooms > 5 && stringPerNumber(filters.roomsFilter) === 5)
                        && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                    
                    if (filters.roomsFilter !== 'any' && filters.priceFilter === 'any' && filters.typeFilter === 'any') {
                        (ad.offer.guests === stringPerNumber(filters.guestFilter) && ad.offer.guests <= 2 
                        || ad.offer.guests >= 3 && ad.offer.guests <= 5 && stringPerNumber(filters.guestFilter) === 5
                        || ad.offer.guests > 6 && stringPerNumber(filters.guestFilter) === 6)
                        && (ad.offer.rooms === stringPerNumber(filters.roomsFilter) || ad.offer.rooms > 5 && stringPerNumber(filters.roomsFilter) === 5)
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                    
                    if (filters.roomsFilter === 'any' && filters.priceFilter === 'any' && filters.typeFilter !== 'any') {
                        (ad.offer.guests === stringPerNumber(filters.guestFilter) && ad.offer.guests <= 2 
                        || ad.offer.guests >= 3 && ad.offer.guests <= 5 && stringPerNumber(filters.guestFilter) === 5
                        || ad.offer.guests > 6 && stringPerNumber(filters.guestFilter) === 6) 
                        && ad.offer.type === filters.typeFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                    
                    if (filters.roomsFilter === 'any' && filters.priceFilter !== 'any' && filters.typeFilter === 'any') {
                        (ad.offer.guests === stringPerNumber(filters.guestFilter) && ad.offer.guests <= 2 
                        || ad.offer.guests >= 3 && ad.offer.guests <= 5 && stringPerNumber(filters.guestFilter) === 5
                        || ad.offer.guests > 6 && stringPerNumber(filters.guestFilter) === 6) 
                        && priceNumberPerString(ad.offer.price) === filters.priceFilter 
                        ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    }
                }
            }

            function filterByGuests () {
                for (let i = 0; i < ads.length; i++) {
                    let ad = ads[i];
                     if (filters.guestFilter === '1') {
                        ad.offer.guests === 1 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.guestFilter === '2') {
                        ad.offer.guests === 2 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.guestFilter === '5') {
                        ad.offer.guests > 2 && ad.offer.guests <= 5 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } else if (filters.guestFilter === '5+') {
                        ad.offer.guests > 5 ? window.mapPinPostedAd[i].classList.remove('map__pinCurtain') : window.mapPinPostedAd[i].classList.add('map__pinCurtain');
                    } 
                }
            }

            function filterHandler () {
                
                if (filters.typeFilter === 'any' 
                && filters.priceFilter === 'any' 
                && filters.roomsFilter === 'any'
                && filters.guestFilter === 'any'
                && filters.wifi === false
                && filters.dishwasher === false
                && filters.parking === false
                && filters.washer === false
                && filters.elevator === false
                && filters.conditioner === false) {
                    
                    for (let i = 0; i < ads.length; i++) {
                      window.mapPinPostedAd[i].classList.remove('map__pinCurtain');
                    }
                }
                

                if (filters.typeFilter !== 'any') {
                    filterByType();
                }

                if (filters.priceFilter !== 'any') {
                    filters.typeFilter !== 'any' ? checkPriceByType() : filterByPrice();
                }

                if (filters.roomsFilter !== 'any') {
                    filters.typeFilter !== 'any' || filters.priceFilter !== 'any' ? checkRoomsByPriceByType() : filterByRooms();
                }

                if (filters.guestFilter !== 'any') {
                    filters.typeFilter !== 'any' || filters.priceFilter !== 'any' || filters.roomsFilter !== 'any' 
                    ? checkGuestsByRoomsByPriceByType() : filterByGuests();
                }
            }
            

            mapFilters.childNodes[1].addEventListener('change', function () {
                filters.typeFilter = mapFilters.childNodes[1].value;
                filterHandler();
               
                console.log(filters);
            });
            
            mapFilters.childNodes[3].addEventListener('change', function() {
                filters.priceFilter = mapFilters.childNodes[3].value;
                filterHandler();
               
                console.log(filters);
            });

            mapFilters.childNodes[5].addEventListener('change', function() {
                filters.roomsFilter = mapFilters.childNodes[5].value;
                filterHandler();
               
                console.log(filters);
            });

            mapFilters.childNodes[7].addEventListener('change', function() {
                filters.guestFilter = mapFilters.childNodes[7].value;
                filterHandler();
              
                console.log(filters);
            });

            mapFilters.childNodes[9].addEventListener('change', function() {
                filters.wifi = mapFilterSet.childNodes[1].checked;
                filters.dishwasher = mapFilterSet.childNodes[5].checked;
                filters.parking = mapFilterSet.childNodes[9].checked;
                filters.washer = mapFilterSet.childNodes[13].checked;
                filters.elevator = mapFilterSet.childNodes[17].checked;
                filters.conditioner = mapFilterSet.childNodes[21].checked;
                
                // let features = [];

                // function addFeatures(item) {
                //     features.push(item);
                // }

                // if (filters.wifi) {
                //     addFeatures("wifi");
                // }
                // if (filters.dishwasher) {
                //     addFeatures("dishwasher");
                // }
                // if (filters.parking) {
                //     addFeatures("parking");
                // }
                // if (filters.washer) {
                //     addFeatures("washer");
                // }
                // if (filters.elevator) {
                //     addFeatures("elevator");
                // }
                // if (filters.conditioner) {
                //     addFeatures("conditioner");
                // }
                // console.log(features)
                // for (let i = 0; i < ads.length; i++) {
                //     var ad = ads[i];
                //     for (let j of features) {
                //      if (ad.offer.features[j] === features[j]) {
                //         console.log('yes');
                //      }
                //     } 
                // }
            console.log(filters);
            });
    } 
    filter();
    });
})();