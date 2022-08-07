const ham = document.querySelector('.open-menu img');
const logo = document.querySelector('.logo img');
const nav = document.querySelector('.navegacion');

//Features section
const btnFt = document.querySelectorAll('.btn-features ul li button');
const imgTabFt = document.querySelector('.images-ft .img-ft');
const titleTabFt = document.querySelector('.info-tabs .title-tab');
const infoTabFt = document.querySelector('.info-tabs .info-tab');
const btnTab1 = document.querySelector('#tab1');
const btnTab2 = document.querySelector('#tab2');
const btnTab3 = document.querySelector('#tab3');

//FAQ
const faqBtn = document.querySelectorAll('.enlace a');

//Contact Verificar Email
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formulario = document.querySelector('#formulario');
const email = document.querySelector('#email');
const btnEnviar = document.querySelector('#submit');

//Hover socials
const fbLogo = document.querySelector('#facebook-logo');
const twLogo = document.querySelector('#twitter-logo');

eventListeners();

function eventListeners() {
    ham.addEventListener('click', abrirMenu);
    btnTab1.addEventListener('click', addDatosTab1);
    btnTab2.addEventListener('click', addDatosTab2);
    btnTab3.addEventListener('click', addDatosTab3);

    //Contact
    btnEnviar.addEventListener('click', enviarForm)

    //Ocultar menu al hacer scroll
    document.addEventListener('scroll', hiddenMenu)

    //SCROLL SMOOTH
    document.addEventListener('DOMContentLoaded', function() {
        iniciarApp();
    });
}

/*=========================================================+
 |~-~-~-~-~-~-~-~-~-~-~SCROLL Y HOVER-~-~-~-~-~-~-~-~-~-~-~|
 +=========================================================*/
function iniciarApp() {
    scrollNav();
    scrollNavFooter();
    hover();
}
function scrollNav() {
    const enlaces = document.querySelectorAll('.enlaces li a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView( {behavior: 'smooth'} );
        });
    });
}
function scrollNavFooter() {
    const enlacesFooter = document.querySelectorAll('.enlaces-footer li a');
    enlacesFooter.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView( {behavior: 'smooth'} );
        });
    });
}
function hover() {
    fbLogo.onmouseover = ()=> {fbLogo.src = `build/img/icon-facebook-hover.svg`};
    fbLogo.onmouseout = ()=> {fbLogo.src = `build/img/icon-facebook.svg`};
    
    twLogo.onmouseover = ()=> {twLogo.src = `build/img/icon-twitter-hover.svg`};
    twLogo.onmouseout = ()=> {twLogo.src = `build/img/icon-twitter.svg`};  
}
/*=========================================================+
 +=========================================================*/

 
//Menu Ham
function abrirMenu() {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        logo.src = `build/img/logo-bookmark-white.svg`;
        ham.src = `build/img/icon-hamburger-white.svg`
    } else {
        logo.src = `build/img/logo-bookmark.svg`;
        ham.src = `build/img/icon-hamburger.svg`;
    } 
}
//Hidden menu
function hiddenMenu() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
        ham.src = `build/img/icon-hamburger.svg`;
        logo.src = `build/img/logo-bookmark.svg`;
    }
}

//Features section
btnFt.forEach(button =>{
    button.addEventListener('click', () =>{
        btnFt.forEach(button =>{
            button.classList.remove('active-ft');
        })
        button.classList.add('active-ft');
    });
})

//Cambiar datos
function addDatosTab1() {
    imgTabFt.src = `build/img/illustration-features-tab-1.svg`;
    imgTabFt.alt = 'Illustration Tab 1';
    titleTabFt.textContent = 'Bookmark in one click';
    infoTabFt.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
}
function addDatosTab2() {
    imgTabFt.src = `build/img/illustration-features-tab-2.svg`;
    imgTabFt.alt = 'Illustration Tab 2';
    titleTabFt.textContent = 'Intelligent search';
    infoTabFt.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
}
function addDatosTab3() {
    imgTabFt.src = `build/img/illustration-features-tab-3.svg`;
    imgTabFt.alt = 'Illustration Tab 3';
    titleTabFt.textContent = 'Share your bookmarks';
    infoTabFt.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
}


//Faq
faqBtn.forEach(button =>{
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        button.nextElementSibling.classList.toggle('expand');
        if (button.nextElementSibling.classList.contains('expand')) {
            button.children[0].src = `build/img/icon-chevron-red.svg`;
            button.children[0].alt = 'Icon up';
        } else {
            button.children[0].src = `build/img/icon-chevron.svg`;
            button.children[0].alt = 'Icon down';
        }
    });
})


//Email verification
function enviarForm(e) {
    e.preventDefault();

    if (er.test(email.value)) {
        email.classList.remove('error-mail');
        const spinner = document.querySelector('#spinner');

        spinner.style.display = 'flex';

        setTimeout(() => {
            spinner.style.display = 'none';
            
            mensajeAlerta('Thank you for contacting us!!', 'exito');

            resetearFormulario(); 

        }, 2000);
    } else {
        mensajeAlerta('Whoops, make sure it\264s an email.', 'error');
        email.classList.add('error-mail')
    }

    

}

function resetearFormulario() {
    formulario.reset();
}

function mensajeAlerta(mensaje, tipo) {
    const parrafoError = document.createElement('p');
    parrafoError.textContent = mensaje;
    if (tipo === 'error') {
        parrafoError.classList.add('error');
        formulario.insertBefore(parrafoError, document.querySelector('#submit'));
    } else {
        parrafoError.classList.add('exito');
        formulario.appendChild(parrafoError)
    }
    

    setTimeout(() => {
        parrafoError.remove()
    }, 3000);
}



