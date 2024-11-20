// JavaScript to make the image move up on scroll
window.addEventListener('scroll', function() {
    var image = document.getElementById('teacherImage');
    var scrollPosition = window.scrollY;

    // Add the class 'scroll-up' when the user scrolls down
    if (scrollPosition > 100) {
        image.classList.add('scroll-up');
    } else {
        image.classList.remove('scroll-up');
    }
});
