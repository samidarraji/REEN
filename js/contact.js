function getContact() {
    var form = document.getElementById('form-display');
    var isActive = false;
    
    if (isActive == false) {
        form.style.display = 'block';
        isActive = true;
    }
    else {
        form.style.display = 'none';
        isActive = false;
    }

}