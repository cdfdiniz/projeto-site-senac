function showSection(sectionId) {
    var sections = document.querySelectorAll('.tm-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
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