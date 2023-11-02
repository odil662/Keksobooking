(function () {
    const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    let uploadAvatar = document.querySelector('.notice__photo');
    window.avatarPreview = document.querySelector('.notice__preview');
    let uploadPhoto = document.querySelector('.form__photo-container');
    window.photoPreview = document.querySelector('.form__photo-preview'); 

    let matches = function (name) {
        FILE_TYPES.some(function (it) {
            return name.endsWith(it);
        })
    }
    
    uploadAvatar.addEventListener('change', function () {
        let file = uploadAvatar.childNodes[1].childNodes[3].files[0];
        let fileName = file.name.toLowerCase();
        matches(fileName);
       
        if (matches) {
            let reader = new FileReader();
            reader.addEventListener('load', function () {
                window.avatarPreview.childNodes[1].src = reader.result;
            })

            reader.readAsDataURL(file);
        }
    })
    
    uploadPhoto.addEventListener('change', function () {
        let file = uploadPhoto.childNodes[1].childNodes[3].files;
      
        for (let i = 0; i < file.length; i++) {
            let liCreate = document.createElement('li');
            let liAdd = window.photoPreview.appendChild(liCreate);

            let liPhotoPreview = window.photoPreview.querySelectorAll('li');
            
            let fileName = file[i].name.toLowerCase();
            matches(fileName)
           
            if (matches) {
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    for (let j = 0; j < liPhotoPreview.length; j++) {
                        if (liPhotoPreview[j].childNodes.length === 0) {
                            let imgCreate = document.createElement('img');
                            let liChildAdd = liPhotoPreview[j].appendChild(imgCreate);
                            liPhotoPreview[j].childNodes[0].src = reader.result;
                        }             
                    }
                })

                reader.readAsDataURL(file[i]);
            }
        }
    })
})()