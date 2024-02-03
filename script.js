document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

document.querySelector('.portfolio-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var loadingAnimation = document.getElementById('loading-animation');
    loadingAnimation.style.display = 'block';

    setTimeout(function() {
        location.reload();
    }, 1400); 
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var educationItems = document.querySelectorAll('.education-item');

    function checkVisibility() {
        educationItems.forEach(function(item) {
            var position = item.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                item.classList.add('visible');
            }
        });
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('DOMContentLoaded', function() {
    var projectCards = document.querySelectorAll('.project-card');

    function checkVisibility() {
        projectCards.forEach(function(card) {
            var position = card.getBoundingClientRect();

            // Check if the card is in the viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                card.classList.add('visible');
            }
        });
    }

    // Initial check
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});
