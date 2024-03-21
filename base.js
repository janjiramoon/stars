document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more-nola');
    var targetContent = document.getElementById('nola-read-more');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        targetContent.style.display = 'block'; // Show the content
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more');
    var targetContent = document.getElementById('murmur-read-more');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        targetContent.style.display = 'block'; // Show the content
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more-contra');
    var targetContent = document.getElementById('contra-read-more');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        targetContent.style.display = 'block'; // Show the content
    });
});