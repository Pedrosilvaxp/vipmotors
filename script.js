// Menu mobile
const menubtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
const menuLink = document.querySelectorAll('.menu-list a');

menubtn.addEventListener('click', function() {
    if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
    } else {
        menuList.classList.add('active');
    }
});
menuLink.forEach((link) => {
    link.addEventListener('click', function() {
        if (menuList.classList.contains('active')) {
            menuList.classList.remove('active');
        }
    });
});

// Controlando o header
const header = document.querySelector('header'); 
let ultimoScroll = 0;

window.onscroll = function() {
    let userScroll = document.documentElement.scrollTop;

    if (userScroll > ultimoScroll) {
        header.style.top = '-209px';
    } else {
        header.style.top = '0px';
    }

    ultimoScroll = userScroll <= 0 ? 0 : userScroll;

    // Controlando botão de voltar
    const backBtn = document.querySelector('.back-btn');
    if (userScroll > 450) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
}

// Scroll automático
const carrosArea = document.querySelector('.cars');
const ofertasArea = document.querySelector('.oferts');
const sobreArea = document.querySelector('.sobre');

function autoScroll(call) {
    event.preventDefault();
    call.scrollIntoView({ behavior:'smooth' });
}
function carros() {
    autoScroll(carrosArea);
}
function ofertas() {
    autoScroll(ofertasArea);
}
function sobre() {
    autoScroll(sobreArea);
}
function voltar() {
    event.preventDefault();
    scrollTo({ top: 0, behavior:'smooth' });
}

// Filtrando carros
const carroNovo = document.querySelectorAll('.novo');
const carroUsado = document.querySelectorAll('.usado');
const carrosd = document.querySelectorAll('.cars-item');

function filtrar(call) {
    if (call == 1) {
        carroUsado.forEach((ele) => {
            ele.style.display = 'none';
        });
        carroNovo.forEach((ele) => {
            ele.style.display = 'inherit';
        });
    }
    if (call == 2) {
        carroNovo.forEach((ele) => {
            ele.style.display = 'none';
        });
        carroUsado.forEach((ele) => {
            ele.style.display = 'inherit';
        });
    }
    if (call == 3) {
        carrosd.forEach((ele) => {
            ele.style.display = 'inherit';
        });
    }
}