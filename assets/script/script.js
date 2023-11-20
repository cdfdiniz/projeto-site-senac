// Background
function changeBackground(bgImage) {
    document.body.style.backgroundImage = `url('./assets/img/${bgImage}')`;
}

// Mostra sessão ao clicar
function showSection(sectionId) {
    var sections = document.querySelectorAll('.tm-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';

    // Adicionando a classe "active" à seção selecionada
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    selectedSection.classList.add('active');
}
        
    }
    

document.addEventListener('DOMContentLoaded', function() {
    // Chama a função showSection para exibir a seção inicial
    showSection('tm-section');

    const navLinks = document.querySelectorAll('.tm-main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const bgImage = this.getAttribute('data-bg-img');
            changeBackground(bgImage);

            //const sectionId = this.getAttribute('data-page');
            //showSection(sectionId);
        });
    });

    
});

// Imagens Our Products
const inputs = document.querySelectorAll('.input');
const slider = document.querySelector('.tm-img-slider');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        const index = Array.from(inputs).indexOf(input);
        slider.style.transform = `translateX(-${index * 33.333}%)`;
    });
});
    

    
