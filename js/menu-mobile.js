var navbar = document.getElementById('navbarSupportedContent');
var btnToggle = document.getElementById('btn-toggle');
var etatNavBar;

btnToggle.addEventListener('click', function(){
    console.log('ok');
    if(etatNavBar === false ){
        navbar.classList.remove('show-nav-mobile');
        etatNavBar = true;
    }else{
        navbar.classList.add('show-nav-mobile');
        etatNavBar = false;
    }
});