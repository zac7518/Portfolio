document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // Function to display current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.transform = `translateX(0)`;
            } else {
                slide.style.transform = `translateX(${100 * (i - index)}%)`;
            }
        });
    }

    // Event listener for previous button
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Event listener for next button
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Initially display the first slide
    showSlide(currentIndex);
});

// Charger le header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

// Charger le footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });


// SLIDES

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('presentation-heading').textContent = data.presentation.heading;
            document.getElementById('presentation-description').textContent = data.presentation.description;
            document.getElementById('cv-link').href = data.presentation.cv_link;
            document.getElementById('cv-button-text').textContent = data.presentation.cv_button_text;
            document.getElementById('competences-heading').textContent = data.competences.heading;
            document.getElementById('competences-description').textContent = data.competences.description;
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});