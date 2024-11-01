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