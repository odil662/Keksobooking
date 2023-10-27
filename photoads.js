(function () {
    const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    let uploadimg = document.querySelector('.upload');
    let preview = document.querySelector('.notice__preview');
    
    uploadimg.addEventListener('change', function () {
        let file = uploadimg.childNodes[3].files[0];
        let fileName = file.name.toLowerCase();
        let matches = FILE_TYPES.some(function (it) {
            return fileName.endsWith(it);
        })
        
        if (matches) {
            let reader = new FileReader();
            reader.addEventListener('load' , function () {
                preview.childNodes[1].src = reader.result;
            })

            reader.readAsDataURL(file);
        }
    })
})()