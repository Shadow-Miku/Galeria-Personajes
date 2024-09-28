const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.dropdown-menu');

// Función para abrir/cerrar el menú y el icono
menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show');
    menuIcon.classList.toggle('show');
    overlay.style.display = menu.classList.contains('show') ? 'block' : 'none';
});


// Obtiene el año actual para el footer
const currentYear = new Date().getFullYear();
// Inserta el año en el elemento con id "year"
document.getElementById('year').textContent = currentYear;


/////////////////////////////// Funciones de la galeria ////////////////////////////////

// Array de objetos que contiene la información de cada tarjeta.
// Cada objeto tiene los siguientes campos:
// - type: tipo de la tarjeta.
// - title y title2: títulos para la tarjeta.
// - description: descripción de la tarjeta.
// - image: URL de la imagen de fondo para la tarjeta.

const data = [
    // Ejemplo de objeto en el array de datos.
    {
        type:'Bocchi the rock',
        title:'GOTOH',
        title2:'HITORI',
        description:'Hitori Gotoh, an extremely timid and introverted first-year student in high school often referred by her bandmates as Bocchi-chan. She is in the first year of Shuka High School and is in charge of the guitar and lyrics of the band, Kessoku Band. She aspires to perform in a band that could showcase even a reserved girls talent, hence she began playing the guitar. Although her skill is the real deal, she struggles to exhibit it proficiently in a band or in front of an audience. ',
        image:'../public/img/gotoh_hitori-bkg.jpg'
    }, // (Otros objetos similares a continuación...)
    {
        type:'Genshin Impact',
        title:'CHIORI',
        title2:' ',
        description:'An independent designer hailing from Inazuma who strives to make her brand internationally recognized across all of Teyvat, Chiori is the industrious yet headstrong owner of Chioriya Boutique, a fashion label in Fontaine which has also served as an "intelligence boutique" for law enforcement. Steadfast in attaining what she wants, she refuses to change her ways and personality to conform with societal norms.',
        image:'../public//img/chiori-bkg.png'
    },
    {
        type:'Quintessential Quintuplets',
        title:'Nakano',
        title2:'Yotsuba',
        description:'Yotsuba Nakano is the fourth sister of the Nakano Quintuplets. She has a bright and cheerful personality. Yotsuba is the only sister who accepts Fuutarou from the start and wholeheartedly supports him in everything. She is an active, cheerful and calm girl. She speaks in a loud, spontaneous and sometimes absent-minded manner. She is the type of person who cant say no to people who need help, and is mostly seen helping people, either directly or indirectly.',
        image:'../public/img/nakano_yotsuba-bkg.png'
    },
    {
        type:'Bofuri',
        title:'Maple',
        title2:' ',
        description:'Since she doesnt like to get hurt, she puts every skill point she earns into boosting her defense, allowing her to acquire new skills and level up simply by withstanding attacks. Even with her lack of gaming experience, Maple remarkably gains enough resistance to almost anything, giving the game admins many headaches on how to slow her down; to which, her unorthodox methods overcomes the developers adjustments.',
        image:'../public/img/maple-bkg.jpg'
    },
    {
        type:'Metal Slug',
        title:'Fio',
        title2:'Germi',
        description:'Fio is the only daughter of a wealthy Italian family. The Germi family was historically a military family, so of course Fios father wished for the first child to be a strong son. However, following a difficult birth, her mother became unable to bear additional children. This was the first time in Germi history that the family had a female heir. Due to family tradition, she was required to become a soldier, so she was made to join the Government Forces. The complete opposite of Eri, Fio was raised by loving parents and possesses a quiet demeanor. She studied chiropractics and acupuncture in university and is thinking of becoming a sports doctor in the future.',
        image:'../public/img/fio_germi-bkg.jpg'
    },
]

// Función para actualizar la información de la tarjeta y el fondo
const updateCardInfo = (index) => {
    const selectedData = data[index];
    
    // Actualiza los textos de la tarjeta
    document.querySelector('.details .type-box .text').textContent = selectedData.type;
    document.querySelector('.details .title-1').textContent = selectedData.title;
    document.querySelector('.details .title-2').textContent = selectedData.title2;
    document.querySelector('.details .desc').textContent = selectedData.description;
    
    // Actualiza la imagen de fondo
    setBodyBackground(selectedData.image);
}

// Función para establecer la imagen de fondo
function setBodyBackground(imageUrl) {
    document.documentElement.style.setProperty('--body-bg', `url('${imageUrl}')`);
}

// Agrega un evento a cada tarjeta de la galería
document.querySelectorAll('.box').forEach((box, index) => {
    box.addEventListener('click', () => updateCardInfo(index));
});
