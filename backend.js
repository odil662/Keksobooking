(function () {
    window.load = function (callback) {    
        let url = 'https://24.javascript.pages.academy/keksobooking/data';    

        let onError = function (message) {
            console.error(message);
        };

        let onLoad = function (data) {
            callback(data);
        };

        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';


        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                onLoad(xhr.response);
            } else {
                onError = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;   
             }; 
        });

        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });

        xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout + 'mc');
        });

        xhr.timeout = 10000; //10sek
        xhr.open('GET', url);
        xhr.send();
    };
})();



(function () {
    window.upload = function (data, onSuccess ) {
        let url = 'https://24.javascript.pages.academy/keksobooking';

        let onLoad = function (onSuccess) {
            console.log(onSuccess);
        };

        let onError = function (message) {
            console.log(message);
        };

        let xhr = new XMLHttpRequest(); 
        xhr.response = 'json';

        xhr.addEventListener('load', function () {
            onSuccess(xhr.response);
            
            if (xhr.status === 200) {
                onLoad(xhr.response);
            } else {
                onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
            };
        });

        xhr.open('POST', url);
        xhr.send(data);
    }

    let form = document.querySelector('.notice__form');

    form.addEventListener('submit', function (evt) {
    
        window.upload(new FormData(form), function (response) {
            form.reset();
        });

        evt.preventDefault();
    })
})()