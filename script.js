// JSON

document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('presentation-heading').textContent = data.presentation.heading;
            document.getElementById('presentation-description').textContent = data.presentation.description;
            document.getElementById('cv-button-text').textContent = data.presentation.cv_button_text;
            document.getElementById('competences-heading').textContent = data.competences.heading;
            document.getElementById('competences-description').textContent = data.competences.description;
            document.getElementById('preentreprise-heading').textContent = data.preentreprise.heading;
            document.getElementById('preentreprise-description').textContent = data.preentreprise.description;
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
})

// HEADER

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    }
);

// FOOTER

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

// INDEX

// Présentation

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.index_presentation_fonds_form');
        presentationText.classList.add('visible');
    }, 1000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.index_presentation_fonds_form_texte_titre');
        presentationText.classList.add('visible');
    }, 2000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.index_presentation_fonds_form_texte_separation');
        presentationText.classList.add('visible');
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.index_presentation_fonds_form_texte_paragraphe');
        presentationText.classList.add('visible');
    }, 4000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.index_presentation_fonds_form_bouton');
        presentationText.classList.add('visible');
    }, 6000); 
});

// Compétences

function observeVisibility(selector) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 1 
    });

    elements.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
    observeVisibility('.index_competences_texte_titre');
});

// ENTREPRISE

// Présentation

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.entreprise_presentation_fonds_form');
        presentationText.classList.add('visible');
    }, 1000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.entreprise_presentation_fonds_form_texte_titre');
        presentationText.classList.add('visible');
    }, 2000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.entreprise_presentation_fonds_form_texte_separation');
        presentationText.classList.add('visible');
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.entreprise_presentation_fonds_form_texte_paragraphe');
        presentationText.classList.add('visible');
    }, 4000); 
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const presentationText = document.querySelector('.entreprise_presentation_fonds_form_bouton');
        presentationText.classList.add('visible');
    }, 6000); 
});