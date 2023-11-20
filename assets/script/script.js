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
<<<<<<< HEAD

    // Adicionando a classe "active" à seção selecionada
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    selectedSection.classList.add('active');
}
        
    }
    

document.addEventListener('DOMContentLoaded', function() {
    // Chama a função showSection para exibir a seção inicial
=======
<<<<<<< HEAD

        // Adicionando a classe "active" à seção selecionada
        sections.forEach(function(section) {
            section.classList.remove('active');
        });
        selectedSection.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Chame a função showSection para exibir a seção inicial
>>>>>>> c8ffc8a8cbc8c0d9f108bef0076accb733b4b0d6
    showSection('tm-section');

    const navLinks = document.querySelectorAll('.tm-main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const bgImage = this.getAttribute('data-bg-img');
            changeBackground(bgImage);

<<<<<<< HEAD
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
    

    
=======
            const sectionId = this.getAttribute('data-page');
            showSection(sectionId);
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
});
=======
    } 
}

let contador = 1;

setInterval(function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if(contador > 5) {
        contador = 1;
    }
}, 3000);
>>>>>>> 1d4d40395352531e4cb15005f7d0167cc7099ef2
>>>>>>> c8ffc8a8cbc8c0d9f108bef0076accb733b4b0d6
