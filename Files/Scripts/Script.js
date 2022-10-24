const icon = document.querySelector('#icon');
const menu = document.querySelector('#menu');

icon.addEventListener('click', (e) => {

    menu.classList.toggle('active');
   

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'img/open-menu.png'){
        e.target.setAttribute('src','../../Sources/menu.png');
    }else{
        e.target.setAttribute('src','../../Sources/menu.png');
    }

});